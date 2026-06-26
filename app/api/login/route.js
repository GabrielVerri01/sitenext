import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request) {
    const { email, senha } = await request.json()

    const usuario = await prisma.usuario.findUnique({
        where: { email }
    })

    if (!usuario) {
        return NextResponse.json(
            { error: 'Email ou senha invalidos.' },
            { status: 401 }
        )
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

    if (!senhaCorreta) {
        return NextResponse.json(
            { error: 'Email ou senha invalidos.' },
            { status: 401 }
        )
    }

    return NextResponse.json({
        id: usuario.id,
        usuario: usuario.usuario,
        email: usuario.email,
        cargo: usuario.cargo
    })

}
