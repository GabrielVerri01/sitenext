

import { prisma } from "@/lib/prisma";
import ToggleProduto from "./toggleProduto.jsx";
import Link from "next/link";


export default async function editarProdutos(){
    const produtos = await prisma.produto.findMany();

    // function Voltar(){
    //     return <Link href="/admin/produtos" />
    // }
   

    return(
        <div>
            <div className="flex items-center justify-between">
                <h1>Gerenciar Disponibilidade de Produtos</h1>
                <button type="button" className="border border-gray-300 rounded w-24 shadow mt-2 px-1 shadow-xl
                    transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]"><Link href="/admin" >Voltar</Link>
                </button>
            </div>

            <div className="space-y-3">
                {produtos.map((produto) => (
                    <div key={produto.id} className="flex justify-between border p-3">
                        <span>{produto.nome}</span>
                        <ToggleProduto id={produto.id} ativo={produto.ativo}/>
                    </div>
                ))}
            </div>
            <button type="button"className="bg-red-500 hover:bg-red-700 text-white rounded font-bold px-4">
                <Link href="/admin/novo-produto">  Adicionar Novo Produto</Link>   
            </button>
        </div>
    )
}