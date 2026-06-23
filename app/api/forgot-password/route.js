import { prisma } from "@/lib/prisma";
import { createResetToken, RESET_TOKEN_TTL_MS } from "@/lib/password-reset.js";
import { getResend } from "@/lib/resend";

const genericSuccessResponse = {
  success: true,
  message: "Se login e e-mail estiverem corretos, voce recebera instrucoes de recuperacao.",
};

const rateLimitWindowMs = 15 * 60 * 1000;
const maxRequestsPerWindow = 5;
const rateLimitStore = new Map();

function getClientIp(req){
    const forwardedFor = req.headers.get("x-forwarded-for");
    return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key) {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > maxRequestsPerWindow;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


export async function POST(req){
    try{
        const body = await req.json();
        const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
        const usuario = typeof body.usuario === "string" ? body.usuario.trim() : "";
        
        if (!email || !usuario) {
            return Response.json({message: "Login e e-mail são obrigatórios"}, {status : 400});
        }

        const rateLimitKey = `${getClientIp(req)}: ${usuario}:${email}`;

        if (isRateLimited(rateLimitKey)){
            return Response.json(
                {message: "Muitas tentativas. Tente novamente mais tarde."},
                {status: 429}
            );
        }

        const user = await prisma.usuario.findFirst({
            where: {
                email, usuario,
            },
        });

        if (!user) {
            return Response.json(genericSuccessResponse);
        }

        const { token, tokenHash} = createResetToken();
        console.log("token criado")

        await prisma.usuario.update({
            where: {
                email,
            },
            data: {
                resetToken: tokenHash,
                resetTokenExpire: new Date(Date.now() + RESET_TOKEN_TTL_MS),   
            },
        });

        console.log("criando email para enviar.")

        const appUrl = process.env.APP_URL || process.env.AUTH_URL || "http://localhost:3000";
        const resetLink = new URL(`/reset-password?token=${token}`, appUrl).toString();
        const escapedLogin = escapeHtml(user.usuario);

        try {
            const resend = getResend();

            await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL || "noreply@resend.dev",
                to: email,
                subject: "Recuperacao de Senha",
                html: `<p>Ola,</p>
                  <p>Voce solicitou a recuperacao de senha do login: ${escapedLogin}. Use o link abaixo para redefinir sua senha:</p>
                    <p>
                        <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #920e0e; color: white; text-decoration: none; border-radius: 5px;">
                            Redefinir Senha
                        </a>
                    </p>
                <p>Este link e valido por 1 hora.</p>
                <p>Se voce nao solicitou esta recuperacao, ignore este e-mail.</p>
                <p>Atenciosamente,<br/>Equipe de Suporte</p>`,
            });
        } catch (emailError) {
            console.error("Erro ao enviar email:", emailError);

            if (process.env.NODE_ENV !== "production") {
                return Response.json(
                    { message: "Erro ao enviar e-mail. Verifique RESEND_API_KEY e RESEND_FROM_EMAIL." },
                    { status: 502 }
                );
            }
        }

        return Response.json(genericSuccessResponse);
    } catch (error) {
        console.error("Erro na recuperacao de senha:", error);
        return Response.json(
            { message: "Erro ao processar recuperacao de senha." },
            { status: 500 }
        );
    }
}