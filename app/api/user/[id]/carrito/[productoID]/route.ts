import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function DELETE(request:Request, {params} : {params: {id: number, productoID: number}}) {
    const productoId = params.productoID

    try {
        await prisma.carrito.delete({
            where: {
                id: +productoId
            }
        })

        return NextResponse.json({message: "Producto Eliminado Correctamente"}, { status: 200 })
    } catch (err) {
        return NextResponse.json({error: "Hubo un problema"}, { status: 500 })
    }
}