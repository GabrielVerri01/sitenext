"use client";

import { useState } from "react";

export default function ChatDrawer({ aberto, fechar }) {
    const perguntas = [
        {
            pergunta: "Qual o horário de funcionamento?",
            resposta: "Nosso horário de funcionamento é de terça-feira a domingo, das 13h30 às 18h15."
        },
        {
            pergunta: "Como faço um pedido?",
            resposta: "Você pode fazer um pedido através do nosso site, selecionando os produtos desejados e seguindo o processo de checkout."
        },
        {
            pergunta: "Vocês fazem entrega?",
            resposta: "Sim, oferecemos serviço de entrega para pedidos realizados em nosso site. Consulte a disponibilidade para sua região."
        },
        {
            pergunta: "Quais formas de pagamento?",
            resposta: "Aceitamos cartão de crédito, débito e PIX."
        },
        {
            pergunta: "Onde fica a loja?",
            resposta: "Nossa loja está localizada na Rua dos Guriatans, numero 5, no Renascença."
        },
        {
            pergunta: "Como acompanhar meu pedido?",
            resposta: "Após realizar o pedido, você receberá um email avisando que seu pedido foi enviado."
        },
        {
            pergunta: "Meu pedido atrasou, o que fazer?",
            resposta:" Pedimos desculpas pelo atraso. Por favor, entre em contato com nosso suporte para que possamos verificar o status do seu pedido. (98) 99999-9999"
        },
        {
            pergunta: "Meu pedido consta como entregue, mas não chegou. O que fazer?",
            resposta: "Pedimos desculpas pelo inconveniente. Por conta do encerramento de caixa, seu pedido teve o status atualizado, porém já está em rota."
        },
        {
            pergunta: "Meu produto veio errado, como proceder?",
            resposta: "Pedimos desculpas pelo erro. Por favor, entre em contato com nosso suporte para que possamos resolver o problema e providenciar uma compensação. (98) 99999-9999"
        }
    ]

const [mensagem, setMensagem] = useState("");
const [mensagens, setMensagens] = useState([]);
const [digitando, setDigitando] = useState(false);

const sugestoes = perguntas.filter((item) =>
    item.pergunta.toLowerCase().includes(mensagem.toLowerCase())
);

function enviarMensagem() {
    if (!mensagem.trim()) return;

    setMensagens((prev) => [
        ...prev,
        {
            texto: mensagem,
            autor: "usuario",
        },
    ]);
    
    setMensagem("");
    const resposta = perguntas.find((item) => item.pergunta.toLowerCase().includes(mensagem.toLowerCase()));
    
    setDigitando(true);
    setTimeout(() => {
    setMensagens((prev) => [
        ...prev,
        {
            texto: resposta.resposta,
            autor: "bot",
        },
    ]);
    setDigitando(false);
    }, 3000);
    
}



  return (
    <>
      {/* Fundo escuro */}
      <div
        onClick={fechar}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          aberto ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Painel do chat */}
      <div
        className={`fixed top-0 right-0 h-screen w-[400px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
          aberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-center p-4 border-b">
          <div >
            <h1 className="text-xl font-bold">Chat</h1>
            <p className="text-sm text-gray-500">
              Atendimento ao cliente
            </p>
          </div>

          <button
            onClick={fechar}
            className="text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Mensagens */}
        <div className="flex-1 h-[calc(100vh-150px)] overflow-y-auto p-4 space-y-3">
          <h2 className="text-lg font-semibold text-gray-700 bg-gray-100 p-2 rounded-lg">
            Olá, como podemos ajudar?
          </h2>

          {mensagens.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[75%] p-3 rounded-lg break-words ${
                msg.autor === "usuario"
                  ? "bg-red-500 text-white ml-auto"
                  : "bg-gray-200"
              }`}
            >
              {msg.texto}
            </div>
          ))}
          {digitando && (
            <div className="max-w-[75%] p-3 rounded-lg break-words bg-gray-200">
              Digitando...
            </div>
          )}
        </div>

        {/* Sugestões */}
        <div className="relative">
            {mensagem && sugestoes.length > 0 && (
                <div className="px-3">
                <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {sugestoes.map((item, index) => (
                    <div
                    key={index}
                    onClick={() => setMensagem(item.pergunta)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                    {item.pergunta}
                    </div>
                ))}
                </div>
            </div>
            )}
        </div>


        {/* Input */}
        <div className="border-t p-3 flex gap-2">
          <input
            type="text"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 border rounded-lg px-3 py-2 outline-none"
          />

          <button
            onClick={enviarMensagem}
            className="bg-red-500 text-white px-4 rounded-lg"
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}