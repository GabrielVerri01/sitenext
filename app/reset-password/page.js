'use client'

import { useState } from "react"


export default function ResetPasswordPage(){

    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")

    async function handleRestart(){
        e.preventDefault()

        const resposta = await fetch('/api/reset-password',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify ({
                senha, confirmarSenha

            })
        })

        const dados = await resposta.json()

        if(senha != confirmarSenha){
            alert('As senhas não coincidem, veja se você colocou a mesma senha nas duas.')
            return
        }
    }
    return(
        <main>
            <h1 className="text-3xl">
                Resetar senha
            </h1>
            <p>Digite sua nova senha e volte para o login.</p>
            <div>
                <form>
                    <label>Nova Senha</label>
                    <input type="password" value={senha} onChange={() => setSenha(e.target.value)}></input>
                    <label>Confirmar nova senha</label>
                    <input type="password" value={confirmarSenha} onChange={() => setConfirmarSenha(e.target.value)}></input>
                </form>
            </div>
        </main>
    )
}