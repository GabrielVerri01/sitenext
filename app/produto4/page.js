'use client'

import Image from 'next/image';
import BotaoCarrinho from "../components/BotaoCarrinho";

export default function Produto4Page(){
    return(
        <section>
            <Image src="/produto4/jpg" alt="Produto 4" width={300} height={200} className="w-full rounded-[5px]" />
            <h1>PRODUTO TAL</h1>
            <strong> R$ XXX</strong>
            <p> Esse produto tem x qualidades, y condições e z características.</p>
            <BotaoCarrinho />
        </section>
    )
}