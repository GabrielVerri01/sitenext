import { createHash, randomBytes } from "crypto";

export const RESET_TOKEN_BYTES = 32;
export const RESET_TOKEN_LENGTH = RESET_TOKEN_BYTES * 2;
export const RESET_TOKEN_TTL_MS = 60 * 60 * 1000;

export function createResetToken(){
    const token = randomBytes(RESET_TOKEN_BYTES).toString("hex");
    const tokenHash = hashResetToken(token);

    return { token, tokenHash };
}

export function hashResetToken(token) {
  return createHash("sha256").update(token).digest("hex");
}

export function isValidResetToken(token) {
  return (
    typeof token === "string" &&
    token.length === RESET_TOKEN_LENGTH && 
    /^[a-f0-9]+$/i.test(token)
  );
}

export function isValidNewPassword(password) {
  return typeof password === "string" && password.length >= 6;
}