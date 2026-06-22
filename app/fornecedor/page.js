'use client'

import { useRouter } from 'next/navigation'

export default function FornecedorPage(){

    const router = useRouter()

    function Estoque(){
        return router.push('/estoque');
    }

        return(
        <main>
            <h1>Olá, fornecedor, tudo bem?</h1>
            <button type="button" className="border border-gray-300 rounded" onClick={Estoque}>Ver produtos em falta</button>
            <button type="button" className="border border-gray-300 rounded"onClick={Estoque}>Gerenciar Estoque</button>
        </main>
    )
}