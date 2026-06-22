
import { useRouter } from 'next/navigation'

export default function BotaoCarrinho(){
    const router = useRouter()

    function adicionarAoCarrinho(e){
        e.preventDefault()

        alert("Produto adicionado ao carrinho!")
        router.push('/carrinho');
    }


    return(
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
    )
}