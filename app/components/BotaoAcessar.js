import { useRouter } from 'next/navigation'

export default function BotaoAcessar({email}){
    const router = useRouter()


    function entrarPagina(e){
        e.preventDefault()

        if (!email || email.trim() === ""){
            alert("Você não concluiu seu login, por favor tente novamente.")
            return
        }

        router.push('/produtos')
    }

    return(
        <button className="border border-gray-400 
        shadow mt-2 px-1 shadow-xl
         transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]"
          type="submit" onClick={entrarPagina}>Acessar </button>
    )

}