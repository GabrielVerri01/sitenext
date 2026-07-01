"use client";

import { useState } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import ChatDrawer from "./ChatDrawer";

export default function BotaoChat() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <button
        onClick={() => setAberto(true)}
        className="fixed bottom-6 right-6 bg-red-400 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition z-30"
      >
        <IoChatboxEllipsesOutline size={24} />
      </button>

      <ChatDrawer
        aberto={aberto}
        fechar={() => setAberto(false)}
      />
    </>
  );
}