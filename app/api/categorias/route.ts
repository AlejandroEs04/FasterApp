import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const GET = async (req: Request, res: Response) => {

    try {
        const categorias = await prisma.categoria.findMany()
        return NextResponse.json({message: 'OK', categorias}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}

export const POST = async (req: Request, res: Response) => {

    const item = await req.json()

    try {
        const categoria = await prisma.categoria.create({
            data: {
                nombre: item.nombre,
                icono: item.url
            }
        })
        return NextResponse.json({message: 'OK', categoria}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}

export const DELETE = async (req: Request, res: Response) => {

    const item = await req.json()

    try {
        await prisma.categoria.delete({
            where: {
                id: item.elementoId
            }
        })
        return NextResponse.json({message: 'OK'}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}


