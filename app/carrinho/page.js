"use client";

import { useCart } from "../store/cart";

export default function CarrinhoPage() {
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);

  const total = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl">Carrinho</h1>
      <p>Aqui estão os produtos do seu carrinho:</p>

      {items.length === 0 && <p>Carrinho vazio</p>}

      {items.map((item) => (
        <div key={item.id} className="border p-2 mb-2 rounded">
          <h2>{item.nome}</h2>

          <p>Quantidade: {item.quantidade}</p>
          <p>Preço: R$ {item.preco}</p>
          <p>Total: R$ {item.total}</p>

          <button className="border p-2 mb-2 rounded bg-red-500 text-white hover:bg-red-700 font-bold" onClick={() => removeItem(item.id)}>
            Remover
          </button>
        </div>
      ))}

      <h2 className="mt-4">
        Total geral: R$ {total.toFixed(2)}
      </h2>

      <button className="border p-2 mb-2 rounded bg-red-500 text-white hover:bg-red-700 font-bold ">
        Finalizar Compra 
      </button>
    </div>
  );
}