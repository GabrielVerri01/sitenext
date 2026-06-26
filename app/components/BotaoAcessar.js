export default function BotaoAcessar({ onClick }){
    return(
        <button type="button"
      onClick={onClick}
      className="border border-gray-400 shadow mt-2 px-2 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]">
        Acessar
        </button>
    )
}