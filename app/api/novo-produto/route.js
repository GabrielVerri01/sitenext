import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
    const { nome, descricao, preco, imagem } = await request.json()

    if (!nome || !preco) {
        return NextResponse.json(
            { error: 'Preencha pelo menos nome e preço' },
            { status: 400 }
        )
    }

    const produtoExistente = await prisma.produto.findFirst({
        where: {
            nome: nome 
        }
    });

    if (produtoExistente){
        return NextResponse.json(
            {error : 'Esse produto ja existe'},
            {status : 409}
        )
    };

    const novoProduto = await prisma.produto.create ({
        data: {
            nome,
            descricao, 
            preco : Number(preco), 
            imagem
        },
        select: {
            id: true,
            nome: true,
            preco: true, 
            imagem : true
        }
    })

    return NextResponse.json(novoProduto, {status: 201})
}