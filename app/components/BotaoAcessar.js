import { useRouter } from 'next/navigation'

export default function BotaoAcessar({email, senha}){
    const router = useRouter()

    async function entrarPagina(e){
        e.preventDefault()

        if (!email || email.trim() === "" || !senha || senha.trim() === ""){
            alert("Voce nao concluiu seu login, por favor tente novamente.")
            return
        }

        const resposta = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                senha
            })
        })

        const dados = await resposta.json()

        if (!resposta.ok) {
            alert(dados.error)
            return
        }

        if (dados.cargo === 'admin') {
            router.push('/admin')
        } else if (dados.cargo === 'fornecedor') {
            router.push('/fornecedor')
        } else if (dados.cargo === 'usuario') {
            router.push('/vendas')
        } else {
            alert("Cargo nao encontrado.")
        }
    }

    return(
        <button className="border border-gray-400 shadow mt-2 px-1 shadow-xl transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]" type="button" onClick={entrarPagina}>
            Acessar
        </button>
    )
}
