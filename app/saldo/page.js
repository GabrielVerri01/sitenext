import Link from "next/link"

export default function SaldoPage(){
    return(
        <main>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl">
                    Saldo
                </h1>
                <button type="button" className="border border-gray-300 rounded w-24 shadow mt-2 px-1 shadow-xl
                    transition-transform duration-150 ease-in-out hover:scale-110 rounded-[5px]"><Link href="/admin" >Voltar</Link>
                </button>
            </div>
        </main>
    )
}