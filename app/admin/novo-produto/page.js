'use client'

import { prisma } from "@/lib/prisma";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
// export default function NovoProdutoPage(){
//     return(
//         <div>
//             <h1 className="text-3xl">Novo Produto</h1>
//             <p>Insira as informações do novo produto:</p>

//         </div>
//     )
// }

export default function NovoProdutoPage(){
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")
    const [imagem, setImagem] = useState("")
    const [mensagem, setMensagem] = useState("")

    async function AdicionarProduto(e){
        e.preventDefault()

       
        const resposta = await fetch("/api/novo-produto", {
            method: 'POST',
            headers: {
                'Content-Type' : "application/json",
            },
            body: JSON.stringify({
                nome, descricao, preco, imagem
            }),
        });

        if(!resposta.ok){
            const erro = await resposta.text();
            console.log(erro);
            setMensagem(dados.error);
            return;
        }

        const dados = await resposta.json()
        setMensagem("Produto novo adicionado!")


    }

    return(
        <main>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl">Adicionar Produto</h1>
                <button type="button" className="border border-gray-300 rounded w-24 shadow mt-2 px-1 shadow-xl
                    transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]"><Link href="/admin/produtos" >Produtos</Link>
                </button>
            </div>
            <p>Insira as informações abaixo para adicionar o produto:</p>
            <div>
                <form onSubmit={AdicionarProduto} className="flex flex-col items-center justify-center gap-2 mt-4">
                    <label className="flex flex-col items-center justify-center">Nome do Produto:
                        <input type="text" value={nome} onChange = {(e) => setNome(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]"/>
                    </label>
                    <label className="flex flex-col items-center justify-center">Descrição:
                        <input type="text" value={descricao} onChange = {(e) => setDescricao(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]"/>
                    </label>
                    <label className="flex flex-col items-center justify-center">Preço:
                        <input type="number" value={preco} onChange = {(e) => setPreco(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]"/>
                    </label>
                    <button type="submit" className="border border-gray-400 shadow mt-2 px-2 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]">Adicionar Produto</button>
                </form>
            </div>
             {mensagem && <p className="mt-2 text-green-600">{mensagem}</p>}
        </main>
    )
}