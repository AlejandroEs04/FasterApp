import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request:Request, {params} : {params: {token: string}}) {
    try {
        const usuario = await prisma.usuario.findFirst({
            where: {
                token: params.token
            }
        })

        if(!usuario) {
            return NextResponse.json({msg: "Token Invalido"}, { status: 404 });
        }

        const usuarioActualizado = await prisma.usuario.update({
            where: {
                id: +usuario.id
            },
            data: {
                token: '',
                confirmado: true
            }
        })

        return NextResponse.json({msg: "Usuario Confirmado"}, { status: 200 })
    } catch (error) {
        return NextResponse.json({msg: "Error", error}, { status: 500 })
    }
}