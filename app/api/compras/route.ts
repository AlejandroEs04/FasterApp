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
    const fecha = Date.now()

    const { listaTicket } = data.buy

    try {
        /**const compra = await prisma.compra.create({
            data: {
                fecha: new Date(fecha).toLocaleDateString(),
                total: +data.buy.totalTicket,
                usuarioId: +data.buy.usuarioID
            }
        }) **/

        const productoCompra = await listaTicket.map()

        return NextResponse.json({message: 'OK'}, { status: 200 })
    } catch (error) {
        console.log(error)
    }
}