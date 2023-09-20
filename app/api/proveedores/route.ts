import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const GET = async (req: Request, res: Response) => {

    try {
        const proveedores = await prisma.proveedor.findMany()
        
        return NextResponse.json({message: 'OK', proveedores}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}

export const POST = async (req: Request, res: Response) => {
    const item = await req.json()

    try {
        const proveedor = await prisma.proveedor.create({
            data: {
                nombre: item.nombre
            }
        }) 
        return NextResponse.json({message: 'OK', proveedor}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}
