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

export async function PUT (
    request: Request,
    { params }: { params: { id: string } }
) {
    const elementoId = Number(params.id)
    const item = await request.json()

    try {
        const producto = await prisma.producto.update({
            where: {
                id: elementoId,
            },
            data: {
                nombre: item.nombre,
                precio: +item.precio,
                costo: +item.costo,
                imagen: item.urlImage,
                descripcion: item.descripcion,
                iva: +item.iva,
                categoriaId: +item.categoriaId,
                proveedorId: +item.proveedorId,
                inventario: +item.inventario
            }
        })
        return NextResponse.json({message: 'OK', producto}, { status: 200 })
    } catch (err) {
        return NextResponse.json({message: 'Error', err}.err, {
            status: 500,
        })
    }
}