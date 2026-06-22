import {FaFacebook, FaGoogle, FaLinkedin, FaInstagram} from 'react-icons/fa'
import Link from 'next/link'


export default function FooterPage(){
    return (
        <div>
            <p className="flex flex-col items-center justify-end min-h-[200px] ">Acompanhe nossas redes sociais: </p>
            <div className="flex gap-6 list-none m-0 p-0">
                <Link href='https://www.facebook.com/'><FaFacebook size={24} /></Link>
                <Link href='https://www.google.com/?hl=pt_BR&zx=1782139167902'><FaGoogle size={24}/></Link>
                <Link href='https://br.linkedin.com/'><FaLinkedin size={24} /></Link>
                <Link href='https://www.instagram.com/'><FaInstagram size={24} /></Link>
            </div>
            
        </div>
   
    )
}