

export default function BotaoCarrinho(){


    function adicionarAoCarrinho(){
        alert("Produto adicionado ao carrinho!")
    }


    return(
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
    )
}