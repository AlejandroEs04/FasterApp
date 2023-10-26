import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const GET = async(req:Request, res:Response) => {
    try {
        const compras = await prisma.compra.findMany()
        console.log(compras)
        return NextResponse.json({message: 'OK', compras}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}, { status: 500 })
    }
}

export const POST = async(req:Request, res:Response) => {
    const { data } = await req.json()
    const fecha = await Date.now()

    const { listaTicket } = await data.buy

    try {
        const productosCompra = await listaTicket.map(productoCompra => productoCompra && {
            productoId: productoCompra.id, 
            cantidad: productoCompra.cantidad
        })

        const compra = await prisma.compra.create({
            data: {
                fecha: new Date(fecha).toLocaleDateString(),
                total: +data.buy.totalTicket,
                usuarioId: +data.buy.usuarioID
            }
        })

        console.log(compra)

        /**const compra = await prisma.compra.create({
            data: {
                fecha: new Date(fecha).toLocaleDateString(),
                total: +data.buy.totalTicket,
                usuarioId: +data.buy.usuarioID,
            }
        }) */

        console.log(compra)

        return NextResponse.json({message: 'OK'}, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Error'}, { status: 500 })
        /**const err = new Error("Hubo un error")
        return NextResponse.json({message: 'Error', err}, { status: 500 })*/
    }
}