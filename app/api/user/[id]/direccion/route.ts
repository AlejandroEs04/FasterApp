import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function PUT(request:Request, {params} : {params: {id: number}}) {
    const {data: item} = await request.json()

    const { calleNumero, colonia, CP, ciudad, estado } = await item.direccion

    try {
        const userUpdate = await prisma.usuario.update({
            where: {
                id: +params.id
            },
            data: {
                calleNumero: calleNumero,
                colonia: colonia,
                codigoPostal: +CP,
                ciudad: ciudad,
                estado: estado,
            }
        })

        return NextResponse.json({message: "Ok", userUpdate}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}.error, {
            status: 500,
        })
    }

    
}