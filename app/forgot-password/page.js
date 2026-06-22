'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function ForgotPasswordPage(){
    const [email, setEmail] = useState("")
    const [usuario, setUsuario] = useState("")
    const [mensagem, setMensagem] = useState("")
    const router = useRouter()

    async function handleReset(){
        e.prevent.Default()
        setMensagem("")

        const resposta = await fetch('/api/forgot-password',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario, email
            })
        })

        const dados = await resposta.json()

        if (!resposta.ok){
            setMensagem(dados.error)
            return
        }

        alert('se o email estiver cadastrado, será enviada uma mensagem para você!')
        router.push('/reset-password');        
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
                    <label>Usuário</label>
                    <input type="text" value={usuario} className="border border-gray-300 rounded" onChange={() => setUsuario(e.target.value)}></input>
                    <label>E-mail</label>
                    <input type="email" value={email} className="border border-gray-300 rounded" onChange={() => setEmail(e.target.value)}></input>
                    <button type="submit" className="border border-gray-300 rounded">Recuperar</button>

                </form>
            </div>
        </main>
    )
}