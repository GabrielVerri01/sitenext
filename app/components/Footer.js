import {FaFacebook, FaGoogle, FaLinkedin, FaInstagram} from 'react-icons/fa'


export default function FooterPage(){
    return (
        <div>
            <p className="flex flex-col items-center justify-end min-h-[200px] ">Aqui continuará em todas as paginas </p>
            <div className="flex gap-6 list-none m-0 p-0">
                <FaFacebook size={24} />
                <FaGoogle size={24}/>
                <FaLinkedin size={24} />
                <FaInstagram size={24} />
            </div>
            
        </div>
   
    )
}