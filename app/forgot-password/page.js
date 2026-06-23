'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function ForgotPasswordPage(){
    const [email, setEmail] = useState("")
    const [usuario, setUsuario] = useState("")
    const [error, setError] = useState("")
    const [ success, setSuccess ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const router = useRouter()

    async function handleReset(e){
        e.preventDefault()
        setError("");
        setSuccess("");

        if(!usuario){
            setError("Por favor, digite seu usuário.");
            return;
        }

        if (!email){
            setError("Por favor, digite seu e-mail.");
            return;
        }

        setLoading(true);

        try{    
            const resposta = await fetch('/api/forgot-password',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario, email
                }),
            });

            const dados = await resposta.json();

            if (!resposta.ok){
                setError(dados.message || `Erro ao enviar e-mail de recuperação(${resposta.status}).`)
                return;
            }

            setSuccess(
                dados.message || "se o email estiver cadastrado, será enviada uma mensagem para você!"
                // alert('se o email estiver cadastrado, será enviada uma mensagem para você!')
                // router.push('/reset-password');        
            );
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Erro desconhecido."
            setError(`Erro ao conectar com o servidor: ${errorMessage}`);
            console.error("Erro completo:", err);
        } finally {
            setLoading(false);
        }
    }

    
    return(
        <main>
            <div>
                <h1 className="text-3xl">
                    Esqueceu sua senha?
                </h1>
                <p>Informe seu e-mail para solicitar a recuperação.</p>
            </div>
            <div >
                <form onSubmit={handleReset} className="flex flex-col justify-center items-center gap-2 mt-4">
                    <label className="flex flex-col items-center justify-center">Usuário:</label>
                    <input type="text" value={usuario} className="border border-gray-300 p-1 text-black rounded-[10px]" onChange={(e) => setUsuario(e.target.value)}></input>
                    <label className="flex flex-col items-center justify-center">E-mail:</label>
                    <input type="email" value={email} className="border border-gray-300 p-1 text-black rounded-[10px]" onChange={(e) => setEmail(e.target.value)}></input>
                    <button type="submit" className="border border-gray-400 shadow mt-2 px-2 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]">Recuperar</button>

                </form>
            </div>
        </main>
    )
}