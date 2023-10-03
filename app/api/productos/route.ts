import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const GET = async (req: Request, res: Response) => {

    try {
        const productos = await prisma.producto.findMany()
        
        return NextResponse.json({message: 'OK', productos}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}

export const POST = async (req: Request, res: Response) => {

    const item = await req.json()

    try {
        const producto = await prisma.producto.create({
            data: {
                nombre: item.nombre,
                precio: +item.precio,
                costo: +item.costo,
                imagen: item.url,
                descripcion: item.descripcion,
                iva: +item.iva,
                categoriaId: +item.categoriaId,
                proveedorId: +item.proveedorId,
                inventario: +item.inventario
            }
        })
        return NextResponse.json({message: 'OK'}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}

export const DELETE = async (req: Request, res: Response) => {

    const item = await req.json()

    try {
        await prisma.producto.delete({
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
