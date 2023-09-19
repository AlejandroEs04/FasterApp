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
