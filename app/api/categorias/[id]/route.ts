import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET (
    request: Request,
    { params }: { params: { id: string } }
) {

    const elementoId = params.id

    try {
        const categoria = await prisma.categoria.findMany({
            where: {
                id: +elementoId
            },
            include: {
                productos: true
            }
        })
        
        return NextResponse.json({message: 'OK', categoria}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}

export async function PUT (
    request: Request,
    { params }: { params: { id: string } }
) {
    const elementoId = params.id
    const item = await request.json()

    try {
        const categoria = await prisma.categoria.update({
            where: {
                id: +elementoId,
            },
            data: {
                nombre: item.nombre,
                icono: item.urlImage,
            }
        })
        return NextResponse.json({message: 'OK', categoria}, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({message: 'Error', err}.err, {
            status: 500,
        })
    }
}