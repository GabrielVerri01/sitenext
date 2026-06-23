'use client'

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation";


export default function ResetPasswordPage(){

    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token") || "";
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    async function handleRestart(e){
        e.preventDefault();
        setError("");

        if (!token) {
            setError("Link de redefinicao invalido ou incompleto.");
            return;
        }

        if(senha != confirmarSenha){
            alert('As senhas não coincidem, veja se você colocou a mesma senha nas duas.')
            return;
        }
        
        setLoading(true);
        try {
            const resposta = await fetch('/api/reset-password',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify ({
                    senha, confirmarSenha
    
                }),
            });

            const dados = await resposta.json()

            if (!resposta.ok || !dados.success) {
                setError(dados.message || "Nao foi possivel redefinir sua senha.");
                return;
            }

            alert("Senha redefinida com sucesso! Agora ja poderá fazer o login.");
            router.push('/login');
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";
            setError(`Erro a conectar com o servidor: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    }

    return(
        <main>
            <h1 className="text-3xl">
                Resetar senha
            </h1>
            <p>Digite sua nova senha e volte para o login.</p>
            <div>
                <form onSubmit={handleRestart} className="flex flex-col justify-center items-center gap-2 mt-4">
                    <label className="flex flex-col items-center justify-center">Nova Senha:</label>
                    <input type="password" value={senha} className="border border-gray-300 p-1 text-black rounded-[10px]" onChange={(e) => setSenha(e.target.value)}></input>
                    <label className="flex flex-col items-center justify-center">Confirmar nova senha:</label>
                    <input type="password" value={confirmarSenha} className="border border-gray-300 p-1 text-black rounded-[10px]" onChange={(e) => setConfirmarSenha(e.target.value)}></input>
                    <button type="submit" className="border border-gray-400 shadow mt-2 px-2 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]">Redefinir</button>
                </form>
            </div>
        </main>
    )
}