"use client";

import { useEffect, useState } from "react";

export default function MinhaConta() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

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
      <h1>Minha Conta</h1>

      <p>Usuário: {usuario.usuario}</p>
      <p>Email: {usuario.email}</p>
      <p>Cargo: {usuario.cargo}</p>
    </div>
  );
}