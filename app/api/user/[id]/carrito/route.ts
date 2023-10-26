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
                productoId: +id,
                cantidadOProductos: +cantidad,
                subtotal: +precio,
                fecha: Date.now().toString()
            }
        })

        return NextResponse.json({message: "Ok", carrito}, { status: 200 })
    } catch (err) {
        console.log(err)
    }
}

export async function PUT(request:Request) {
    const {data} = await request.json()

    try {
        const carrito = await prisma.carrito.update({
            where: {
                id: +data.idCarrito
            },
            data: {
                cantidadOProductos: +data.cantidad
            }
        })

        return NextResponse.json({message: "Ok", carrito}, { status: 200 })
    } catch (err) {
        return NextResponse.json({message: 'Error'}, {status: 500})
    }
}

export async function DELETE(request:Request, {params} : {params: {id: number}}) {
    try {
        await prisma.carrito.deleteMany({
            where: {
                usuarioId: +params.id
            }
        })

        return NextResponse.json({message: "Carrito eliminado correctamente"}, { status: 200 })
    } catch (err) {
        
    }
}