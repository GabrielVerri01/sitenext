"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
    return <p> usuario nao encontrado!</p>;
  }
  return (
    <div>
      <h1 className="text-3xl">Minha Conta</h1>

      <p>Usuário: {usuario.usuario}</p>
      <p>Email: {usuario.email}</p>
      <p>Cargo: {usuario.cargo}</p>

      <button type="button" className="border border-gray-300 rounded px-4 bg-red-400 hover:bg-red-700" onClick={sair}>Sair</button>
    </div>
  );
}