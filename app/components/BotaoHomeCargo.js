"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BotaoHomeCargoPage() {
  const [cargo, setCargo] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario) {
      setCargo(usuario.cargo);
    }
  }, []);

  if (!cargo) return null;

  const rota = {
    usuario: "/produtos",
    admin: "/admin"
  }

  return (
    <div>
      {cargo === "usuario" && (
        <Link href={rota[cargo] || "/"}>
          <button className="border px-2 py-1 rounded">
            Voltar
          </button>
        </Link>
      )}
      {cargo === "admin" && (
        <Link href={rota[cargo] || "/"}>
          <button className="border px-2 py-1 rounded">
            Voltar
          </button>
        </Link>
      )}
    </div>
  );
}