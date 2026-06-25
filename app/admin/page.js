'use client'

import { useRouter } from 'next/navigation'

export default function AdminPage(){

    const router = useRouter()

    function Estoque(){
        return router.push('/estoque');
    }

    function Saldo(){
        return router.push('/saldo');
    }

    function Funcionarios(){
        return router.push('/funcionarios');
    }

    function Produtos(){
        return router.push('/admin/produtos');
    }

    return(
        <section>
            <h1>Bem-vindo, Admin!</h1>
            <div className="flex justify-beetween aligm-center">
                <button type="button" className="border border-gray-300 rounded" onClick={Funcionarios}>Gerenciar funcionarios</button>
                <button type="button" className="border border-gray-300 rounded" onClick={Saldo}>Visualizar saldo</button>
                <button type="button" className="border border-gray-300 rounded" onClick={Estoque}>Ver estoque</button>
                <button type="button" className="border border-gray-300 rounded" onClick={Produtos}>Cardápio</button>
            </div>
        </section>
    )
}