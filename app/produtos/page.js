import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ProdutosPage() {
  const produtos = await prisma.produto.findMany({
    where: {
      ativo: true,
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="border border-gray-400 shadow mt-2 px-1 shadow-xl transition-transform duration-250 ease-in-out hover:scale-104 rounded-[5px] cabecalho"
        >
          <Link href={`/produtos/${produto.id}`}>
            <Image
              src=""
              alt={produto.nome}
              width={300}
              height={200}
              className="w-full rounded-[5px]"
            />

            <h2>{produto.nome}</h2>

            <strong>
              R$ {produto.preco.toFixed(2)}
            </strong>

            <p>{produto.descricao}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}