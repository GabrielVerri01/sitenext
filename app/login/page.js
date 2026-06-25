"use client"

import { useState } from 'react'
import BotaoAcessar from '../components/BotaoAcessar'

export default function LoginPage(){
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")

    async function loginUsuario(e){
        e.preventDefault()
        setMensagem("")

        const resposta = await fetch('/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                senha,
            })
        })

        const dados = await resposta.json()

        if (!resposta.ok){
            alert(dados.error);
            return;
        }

        if (resposta.ok){
            localStorage.setItem("usuario", JSON.stringify(dados));
        }
        alert('LOGADO!')
    }

    return(
        <main className="flex flex-col items-center justify-center min-h-[300px] m-4">
            <h1 className="text-3xl">
                Login
            </h1>
            <form onSubmit={loginUsuario}>
                <div className="flex flex-col items-center justify-center gap-2 mt-4">
                    <label className="flex flex-col items-center justify-center">Email:
                        <input type="email" value={email} placeholder="Digite seu email aqui" onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]"/>
                    </label>

                    <label className="flex flex-col items-center justify-center">Senha:
                        <input type="password" value={senha} placeholder="Digite sua senha aqui" onChange={(e) => setSenha(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]"/>
                    </label>

                    <BotaoAcessar email={email} senha={senha}/>

                    <label className="flex items-center justify-center min-width-200">Manter-me conectado:
                        <input type="checkbox" />
                    </label>
                    <span>Esqueceu sua senha?<a href="/forgot-password">Clique aqui</a></span>
                    <span>Não possui login?<a href="/cadastro">Cadastre-se</a></span>
                </div>
            </form>

        </main>
    )
}
