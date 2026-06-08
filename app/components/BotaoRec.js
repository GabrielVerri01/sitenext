export default function BotaoRec({ textoDaReclamacao, aoEnviar}) {
    function enviarReclamacao(e){
        e.preventDefault()

        if(!textoDaReclamacao.trim()){
            alert("Por favor, digite uma mensagem válida!")
        }
        
        aoEnviar(`Reclamação enviada com sucesso: ${textoDaReclamacao}`)
    }

    return(
        <div className="text-center">
            <button className="border border-gray-400
            shadow mt-2 px-1 shadow-xl
            transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]" 
            type="submit" onClick={enviarReclamacao}>Enviar</button>
        </div>
        
    )
}