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