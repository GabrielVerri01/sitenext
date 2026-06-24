import Link from 'next/link'
import { ImCart } from "react-icons/im";

export default function Navbar(){
    return(
        <div className="p-4 bg-red-800 text-white">
            <ul className="flex gap-6 list-none m-0 p-0">
                {/* <li className="hover:text-red-400"><Link href="/login">Login</Link></li> */}
                <li className="hover:text-red-400"><Link href="/">Home</Link></li>
                <li className="hover:text-red-400"><Link href="/sobre">Sobre</Link></li>
                <li className="hover:text-red-400"><Link href="/contato">Contato</Link></li>
                <li className="ml-auto hover:text-red-400"><Link href="/carrinho"><ImCart/></Link></li>
            </ul>

        </div>
    )
}

