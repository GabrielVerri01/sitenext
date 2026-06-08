'use client'

import ProdutoPage from '../produto/page'

export default function VendasPage(){
    return(
        <section>
            <header>
                <h1 className="flex flex-col items-center justify-center ">Bem-vindo à página de produtos</h1>
                <p className="flex flex-col items-center justify-center ">Aqui você consegue visualizar nossos produtos e realizar a compra </p>
            </header>
            <ProdutoPage />
        </section>
    )
}