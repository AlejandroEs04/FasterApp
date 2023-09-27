import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET (
    request: Request,
    { params }: { params: { id: string } }
) {

    const elementoId = Number(params.id)

    try {
        const producto = await prisma.producto.findMany({
            where: {
                id: elementoId
            }
        })
        
        return NextResponse.json({message: 'OK', producto}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}