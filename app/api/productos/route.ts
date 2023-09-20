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

    console.log(item)

    try {
        const producto = await prisma.producto.create({
            data: {
                nombre: item.nombre,
                precio: item.precioNum,
                costo: item.costoNum,
                imagen: item.url,
                descripcion: item.descripcion,
                iva: item.ivaNum,
                categoriaId: item.categoriaIdNum,
                proveedorId: item.proveedorIdNum,
                inventario: item.inventarioNum
            }
        })
        return NextResponse.json({message: 'OK'}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}
