"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function MinhaConta() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const router = useRouter()

  function sair(){
    localStorage.removeItem("usuario");
    router.push('/login');
  }

  useEffect(() => {
    const data = localStorage.getItem("usuario");

    if (data) {
      setUsuario(JSON.parse(data));
    }

    setCarregando(false);
  }, []);

  if (carregando){
    return <p>Carregando...</p>
  }

  if(!usuario){
    return <p> Você não está logado. Por favor, faça login para acessar sua conta.
    </p>;
  }
  return (
    <div>
      <h1 className="text-3xl">Minha Conta</h1>
      <div className="border border-gray-300 rounded p-4 mt-4 justify-center items-center flex flex-col">
        <IoPersonCircleOutline className="text-6xl text-gray-400 mb-4" />
        <p className="text-lg font-semibold">Usuário: {usuario.usuario}</p>
        <p className="text-lg font-semibold">Email: {usuario.email}</p>
        <p className="text-lg font-semibold">Cargo: {usuario.cargo}</p>

      </div>

      <button type="button" className="border border-gray-300 rounded px-4 bg-red-400 hover:bg-red-700" onClick={sair}>Sair</button>
    </div>
  );
}