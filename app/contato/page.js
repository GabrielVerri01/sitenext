"use client"
import BotaoRec from "../components/BotaoRec"
import { useState } from "react"

export default function contatoPage({}){
    const [nome, setNome] = useState("")
    const [texto, setTexto] = useState("")
    const [mensagemSucesso, setMensagemSucesso] = useState("")

    return(
        <section>
            
            <div className="flex flex-col items-center justify-center min-h-[200px] m-4">
                <h1>Bem-vindo à pagina de Contato</h1>
                <p> Fale com nós por aqui</p>
                <label className="flex flex-col items-center justify-center">
                    Digite seu nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]" />
                </label>
                <label className="flex flex-col items-center justify-center">
                    Qual a sua reclamação?
                    <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]" />
                </label>
                <BotaoRec textoDaReclamacao={texto} aoEnviar={setMensagemSucesso} />
                {mensagemSucesso && (
                    <p className="mt-4 text-green-600 font-medium">{mensagemSucesso}</p>
                )}
            </div>
        </section>
    )
}