'use client'

import { useRouter } from 'next/navigation'

export default function Home(){
  
  const router = useRouter()

  function LoginBotao(){
    return(
      router.push('/login')
    )
  }
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">
          HOME
        </h1>
        <button type="button" onClick={LoginBotao} className="border border-gray-300 rounded w-24 shadow mt-2 px-1 shadow-xl
         transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]">Login</button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <h1>Bem-vindo à pagina de inicio</h1>
        <p> 
          cadadaçdmdisopda
        </p>
      </div>

    </main>
  )
}
