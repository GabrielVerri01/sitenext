import Image from "next/image";


export default function Produto1Page(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-gray-400 shadow mt-2 px-1 shadow-xl transition-transform duration-250 ease-in-out hover:scale-104 rounded-[5px] cabecalho">
                <a href="">
                    <Image src="/produto1.jpg" alt="Produto 1" width={300} height={200} className="w-full rounded-[5px]" />
                    <h2>Produto 1</h2>
                    <strong>R$ XXX</strong>
                    <p>Descrição do produto 1</p>
                </a>
            </div>
            <div className="border border-gray-400 shadow mt-2 px-1 shadow-xl transition-transform duration-250 ease-in-out hover:scale-104 rounded-[5px] cabecalho">
                <a href="">
                    <Image src="/produto2.jpg" alt="Produto 2" width={300} height={200} className="w-full rounded-[5px]" />
                    <h2>Produto 2</h2>
                    <strong>R$ XXX</strong>
                    <p>Descrição do produto 2</p>
                </a>
            </div>
            <div className="border border-gray-400 shadow mt-2 px-1 shadow-xl transition-transform duration-250 ease-in-out hover:scale-104 rounded-[5px] cabecalho">
                <a href="">
                    <Image src="/produto3.jpg" alt="Produto 3" width={300} height={200} className="w-full rounded-[5px]" />
                    <h2>Produto 3</h2>
                    <strong>R$ XXX</strong>
                    <p>Descrição do produto 3</p>
                </a>
            </div>
            <div className="border border-gray-400 shadow mt-2 px-1 shadow-xl transition-transform duration-250 ease-in-out hover:scale-104 rounded-[5px] cabecalho">
                <a href="">
                    <Image src="/produto4.jpg" alt="Produto 4" width={300} height={200} className="w-full rounded-[5px]" />
                    <h2>Produto 4</h2>
                    <strong>R$ XXX</strong>
                    <p>Descrição do produto 4</p>
                </a>
            </div>
            <div className="border border-gray-400 shadow mt-2 px-1 shadow-xl transition-transform duration-250 ease-in-out hover:scale-104 rounded-[5px] cabecalho">
                <a href="">
                    <Image src="/produto5.jpg" alt="Produto 5" width={300} height={200} className="w-full rounded-[5px]" />
                    <h2>Produto 5</h2>
                    <strong>R$ XXX</strong>
                    <p>Descrição do produto 5</p>
                </a>
            </div>
            <div className="border border-gray-400 shadow mt-2 px-1 shadow-xl transition-transform duration-250 ease-in-out hover:scale-104 rounded-[5px] cabecalho">
                <a href="">
                    <Image src="/produto6.jpg" alt="Produto 6" width={300} height={200} className="w-full rounded-[5px]" />
                    <h2>Produto 6</h2>
                    <strong>R$ XXX</strong>
                    <p>Descrição do produto 6</p>
                </a>
            </div>

        </div>
        
    )
}