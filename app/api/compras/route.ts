import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const GET = async(req:Request, res:Response) => {
    try {
        const compras = await prisma.compra.findMany()
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
        const compra = await prisma.compra.create({
            data: {
                fecha: new Date(fecha).toLocaleDateString(),
                total: +data.buy.totalTicket,
                usuarioId: +data.buy.usuarioID
            }
        })

        const productosCompra = await listaTicket.map(productoCompra => productoCompra && {
            productoId: productoCompra.id, 
            cantidad: productoCompra.cantidad,
            compraId: compra.id
        })

        await productosCompra.map(async(producto) => {
            const productoAntes = await prisma.producto.findFirst({
                where: {
                    id: producto.productoId
                }
            })

            await prisma.producto.update({
                where: {
                    id: producto.productoId
                }, 
                data: {
                    inventario: productoAntes.inventario - producto.cantidad
                }
            })
        })

        await prisma.productosCompra.createMany({
            data: productosCompra
        })

        return NextResponse.json({message: 'OK', compra}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error'}, { status: 500 })
    }
}