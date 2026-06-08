"use client"

import {useState} from 'react'
import BotaoAcessar from '../components/BotaoAcessar'

export default function LoginPage(){
    
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
    const [cargoAtual, setCargoAtual] = useState('visitante')

    const gerenciarClique = (cargoClicado) => {
        setCargoAtual((cargoAnterior) => {
            if (cargoAnterior === cargoClicado) {
                return 'visitante';
            }
            return cargoClicado;
        });
    };

    return(
        <section>
            

            <div className="flex flex-col items-center justify-center min-h-[200px] m-4">
                <label className="flex flex-col items-center justify-center " >Nome:
                    <input type="text" value={usuario} placeholder="Digite seu nome aqui" onChange= {(e) => setUsuario(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]" />
                </label>

                <label className="flex flex-col items-center  justify-center ">Senha:
                    <input type="password" value={senha} placeholder="Digite sua senha aqui" onChange= {(e) => setSenha(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]"/>
                </label>

                <label className="flex flex-col items-center justify-center ">Email:
                    <input type="email" value={email} placeholder="Digite seu email aqui" onChange= {(e) => setEmail(e.target.value)} className="border border-gray-300 p-1 text-black rounded-[10px]"/>
                </label>

                <div id="funcao-container" className="flex items-center justify-center">
                    <label className="flex items-center justify-center m-1">Usuário:
                        <input type="checkbox" checked={cargoAtual === 'usuario'} onChange={() => gerenciarClique('usuario')} />
                    </label>

                    <label className="flex items-center justify-center m-1">Admin:
                        <input type="checkbox" checked={cargoAtual === 'admin'} onChange={() => gerenciarClique('admin')}/>
                    </label>

                    <label className="flex items-center justify-center m-1">Fornecedor:
                        <input type="checkbox" checked={cargoAtual === 'fornecedor'} onChange={() => gerenciarClique('fornecedor')}/>
                    </label>
                </div>


                <BotaoAcessar email={email}/> 
                <label className="flex  items-center justify-center min-width-200 ">Manter-me conectado:
                    <input type="checkbox" />
                </label>
                {cargoAtual === 'admin' && (
                    <div className="flex flex-col items-center justify-center">
                        <h3>Ola, admin, tudo bem?</h3>
                        <button className="border border-gray-300">Painel de funcionarios</button>
                        <button className="border border-gray-300">Gerenciar contas</button>
                    </div>
                )}
                {cargoAtual === 'fornecedor' && (
                    <div className="flex flex-col items-center justify-center">
                        <h3>Boa tarde, fornecedor, tudo bem?</h3>
                        <button className="border border-gray-300">gerenciar estoque</button>
                        <button className="border border-gray-300">emitir nota fiscal</button>
                    </div>
                )}

                <span>Esqueceu sua senha?<a href="">Clique aqui</a></span>
            </div>

        </section>
    )
}