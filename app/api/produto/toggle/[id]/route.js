import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  const params = await context.params; ///NAO ESTAVA FUNCIONANDO POR CONTA DE {params} ACIMA, ESTAVA INDO COMO PROMISE
  const id = Number(params.id);

  console.log("ID FINAL:", id);  /// USADO PARA RESOLVER QUESTAO DE NAO ACHAR O ID 

  if (isNaN(id)) {
    return NextResponse.json(
      { error: "ID inválido" },
      { status: 400 }
    );
  }

  const produto = await prisma.produto.findUnique({
    where: { id },
  });

  if (!produto) {
    return NextResponse.json(
      { error: "Produto não encontrado" },
      { status: 404 }
    );
  }

  await prisma.produto.update({
    where: { id },
    data: {
      ativo: !produto.ativo,
    },
  });

  return NextResponse.json({ ok: true });
}