"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../store/cart";


export default function ControleQuantidade({ produto }) {
  const addItem = useCart((state) => state.addItem);
  const [quantidade, setQuantidade] = useState(1);
  const router = useRouter();
  const [mensagem, setMensagem] = useState("");

  function aumentar() {
    setQuantidade((prev) => prev + 1);
  }

  function diminuir() {
    setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function adicionarAoCarrinho() {
  addItem(produto, quantidade);
  setMensagem("Produto adicionado ao carrinho!");
}

  // function adicionarAoCarrinho() {
  //   const item = {
  //     id: produto.id,
  //     nome: produto.nome,
  //     preco: produto.preco,
  //     quantidade,
  //     total: produto.preco * quantidade,
  //   };

  //   console.log("Carrinho:", item);
  //   alert('Produto adicionado ao carrinho!');
  //   return(
  //     router.push('/carrinho')
  //   )

  //   // aqui depois você pode salvar no context, localStorage ou zustand
  // }

  return (
    <div className="flex flex-col gap-4">
      {/* controle + e - */}
      <div className="flex items-center gap-4">
        <button
          onClick={diminuir}
          className="px-3 py-1 bg-gray-200 rounded text-xl"
        >
          -
        </button>

        <span className="text-lg font-bold">{quantidade}</span>

        <button
          onClick={aumentar}
          className="px-3 py-1 bg-gray-200 rounded text-xl"
        >
          +
        </button>
      </div>

      {/* botão adicionar */}
      <button
        onClick={adicionarAoCarrinho}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Adicionar ao carrinho - R$ {(produto.preco * quantidade).toFixed(2)}
      </button>
      <p className="">{mensagem}</p>
    </div>
  );
}