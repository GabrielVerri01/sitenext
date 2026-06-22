import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request) {
    const { usuario, email, senha, cargo } = await request.json()

    if (!usuario || !email || !senha || !cargo) {
        return NextResponse.json(
            { error: 'Preencha nome, email, senha e cargo.' },
            { status: 400 }
        )
    }

    const usuarioExistente = await prisma.usuario.findUnique({
        where: { email }
    })

    if (usuarioExistente) {
        return NextResponse.json(
            { error: 'Este email ja esta cadastrado.' },
            { status: 409 }
        )
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10)

    const novoUsuario = await prisma.usuario.create({
        data: {
            usuario,
            email,
            senha: senhaCriptografada,
            cargo
        },
        select: {
            id: true,
            usuario: true,
            email: true,
            cargo: true
        }
    })

    return NextResponse.json(novoUsuario, { status: 201 })
}
