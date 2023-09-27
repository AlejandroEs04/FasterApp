import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request:Request, {params} : {params: {id: number}}) {
    const usuarioId = params.id

    try {
        const carrito = await prisma.carrito.findMany({
            where: {
                usuarioId: +usuarioId
            }
        })

        return NextResponse.json({message: "Ok", carrito}, { status: 200 })
    } catch (err) {
        
    }
}

export async function POST(request:Request, {params} : {params: {id: number}}) {
    const usuarioId = params.id
    const { data } = await request.json() 

    const { id, precio, cantidad } = await data.productoCarrito

    try {
        const carrito = await prisma.carrito.create({
            data: {
                usuarioId: +usuarioId,
                productoId: id,
                cantidadOProductos: cantidad,
                subtotal: cantidad*precio,
                fecha: Date.now().toString()
            }
        })

        return NextResponse.json({message: "Ok", carrito}, { status: 200 })
    } catch (err) {
        console.log(err)
    }
}