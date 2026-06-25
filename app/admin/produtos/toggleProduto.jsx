"use client";

import { useState } from "react";

export default function ToggleProduto({ id, ativo }) {
  const [isActive, setIsActive] = useState(ativo);

  async function toggle() {
    const res = await fetch(`/api/produto/toggle/${id}`, {
      method: "PATCH",
    });

    if (res.ok) {
      setIsActive(!isActive);
    }
  }

  return (
    <button
      onClick={toggle}
      className={isActive ? "text-green-600" : "text-red-600"}
    >
      {isActive ? "Ativo" : "Oculto"}
    </button>
  );
}