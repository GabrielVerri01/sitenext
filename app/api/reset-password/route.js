import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import {
    hashResetToken,
    isValidNewPassword,
    isValidResetToken,
} from "@/lib/password-reset.js";

export async function POST(req) {
    try{
        const body = await req.json();
        const token = body.token;
        const senha = body.senha;

        if (!isValidResetToken(token)) {
            console.log("o token ficou invalido")
            return Response.json(
                {success: false, message: "Token invalido ou expirado."},
                {status : 400}
            );
        }

        if (!isValidNewPassword(senha )) {
            // console.log("a senha nao tem 8 caracteres")
            return Response.json(
                { success: false, message: "A senha deve ter pelo menos 8 caracteres." },
                { status: 400 }
            );
        }

        const user = await prisma.usuario.findFirst({
            where: {
                resetToken: hashResetToken(token),
                resetTokenExpire: {
                    gt: new Date(),
                },
            },
        });

        if (!user){
            return Response.json(
                { success: false, message: "Token invalido ou expirado." },
                { status: 400 } 
            );
        }

        const hashedPassword = await bcrypt.hash(senha, 12);

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                password: hashedPassword,
                resetToken: null,
                resetTokenExpire: null,
                mustChangePassword: false,
            },
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Erro ao redefinir senha:", error);
        return Response.json(
            { success: false, message: "Erro ao redefinir senha." },
            { status: 500 }
        );
    }

}
