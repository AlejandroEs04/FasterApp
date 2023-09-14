import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: "dmap6p5wl",
    api_key: "668117851649871",
    api_secret: "hD5IdvCAgAjlGbBDSKhpoGh3N7M"
});

export const GET = async (req: Request, res: Response) => {

    try {
        const categorias = await prisma.categoria.findMany()
        return NextResponse.json({message: 'OK', categorias}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }
}

export const Post = async (req: Request, res: Response) => {
    const item = await req.json()

    try {

        //const categoria = await prisma.categoria.create({
        //    data: {
        //        nombre: item.nombre,
        //        icono: item.icono
        //    }
        //})
    } catch (error) {
        
    }
}