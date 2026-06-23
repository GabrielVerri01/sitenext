import { Resend } from "resend";

export function getResend(){
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey || resendApiKey.includes("coloque-sua-chave")) {
        throw new Error("RESEND_API_KEY is not configured.");
    }

    return new Resend(resendApiKey);
}