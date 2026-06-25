// "use client"

// import BotaoCarrinho from "@/app/components/BotaoCarrinho";
// import { useState } from "react";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import ControleQuantidade from "@/app/components/ControleQuantidade";


export default async function ProdutosPage({params}) { 

    //   const [quantidade, setQuantidade] = useState(1)

    //   function aumentar(){
    //       setQuantidade((prev) => prev + 1 );
    //   }

    //   function diminuir(){
    //       setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));
    //   }
    

    // function Adicionou(){
    //      alert("Produto adicionado ao carrinho!");
    //      setMensagem("Produto adicionado ao carrinho!");
    //     return;
    // }

    const {id} = await params;
    const produto = await prisma.produto.findUnique({
        where: {
            id: Number(id),
        },
        // include: {           PARA VARIACOES DE TAMANHOS
        //     variacoes: true,
        // },
    });

    if (!produto) {
        notFound();
    }
    
    return (
        <section>
            <Image src="/" alt={produto.nome} width={300} height={200} />

            <h1>{produto.nome}</h1>

            <strong> R$ {produto.preco.toFixed(2)}</strong>

            <p>{produto.descricao}</p>

            <ControleQuantidade produto={produto}/>
            


            {/* <BotaoCarrinho produto={produto} />  */}
            {/* </button><button onClick={aumentar()}>+</button>
            <span>{quantidade}</span>
            <button onClick={diminuir()}>-</button> */}
            {/* <ControleQuantidade produto={produto}/> */}
            
        </section>
    )
}