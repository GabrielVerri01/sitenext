import Image from "next/image";

export default function Produto2Page() {
    return(
        <section>
            <Image src="/produto2.jpg" alt="Produto 2" width={300} height={200} className="w-full rounded-[5px]" />
            <h1>PRODUTO TAL</h1>
            <strong> R$ XXX </strong>
            <p>Esse produto tem x qualidades, y condições e z características.</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Adicionar ao Carrinho</button>
        </section>
    )
}