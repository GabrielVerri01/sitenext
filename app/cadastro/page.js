"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CadastroPage(){
    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [cargo, setCargo] = useState("usuario")
    const [mensagem, setMensagem] = useState("")
    const router = useRouter()

    async function cadastrarUsuario(e) {
        e.preventDefault()
        setMensagem("")

        const resposta = await fetch('/api/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario,
                email,
                senha,
                cargo
            })
        })

        const dados = await resposta.json()

        if (!resposta.ok) {
            setMensagem(dados.error)
            return
        }

        alert("Cadastro realizado com sucesso.")
        router.push('/login')
    }

    return(
        <main className="flex flex-col items-center justify-center min-h-[300px] m-4">
            <h1 className="text-3xl">Cadastro</h1>

            <form onSubmit={cadastrarUsuario} className="flex flex-col items-center justify-center gap-2 mt-4">
                <label className="flex flex-col items-center justify-center">Nome:
                    <input type="text" value={usuario} placeholder="Digite seu nome aqui" onChange={(e) => setUsuario(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]" />
                </label>

                <label className="flex flex-col items-center justify-center">Email:
                    <input type="email" value={email} placeholder="Digite seu email aqui" onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]" />
                </label>

                <label className="flex flex-col items-center justify-center">Senha:
                    <input type="password" value={senha} placeholder="Digite sua senha aqui" onChange={(e) => setSenha(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]" />
                </label>

                <div className="flex items-center justify-center gap-2">
                    <label className="flex items-center justify-center gap-1">
                        <input type="radio" name="cargo" value="usuario" checked={cargo === 'usuario'} onChange={(e) => setCargo(e.target.value)} />
                        Usuario
                    </label>

                    <label className="flex items-center justify-center gap-1">
                        <input type="radio" name="cargo" value="admin" checked={cargo === 'admin'} onChange={(e) => setCargo(e.target.value)} />
                        Admin
                    </label>

                    <label className="flex items-center justify-center gap-1">
                        <input type="radio" name="cargo" value="fornecedor" checked={cargo === 'fornecedor'} onChange={(e) => setCargo(e.target.value)} />
                        Fornecedor
                    </label>
                </div>

                <button type="submit" className="border border-gray-400 shadow mt-2 px-2 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]">
                    Cadastrar
                </button>
            </form>

            {mensagem && <p className="mt-2 text-red-600">{mensagem}</p>}
        </main>
    )
}
