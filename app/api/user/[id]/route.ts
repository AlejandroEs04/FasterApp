import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { verify } from "crypto"
import { verifyJwt } from "../../../../prisma/jwt"

const prisma = new PrismaClient()

export async function GET(request:Request, {params} : {params: {id: number}}) {

    const accessToken = request.headers.get("Token")

    if(!accessToken || !verifyJwt(accessToken)) {
        return NextResponse.json({message: "Error Unauthorized"}, { status: 401 })
    }

    const user = await prisma.usuario.findFirst({
        where: {
            id: +params.id
        },
        select: {
            id: true,
            nombre: true,
            apellido: true,
            numero: true,
            calleNumero: true,
            colonia: true,
            codigoPostal: true,
            ciudad: true,
            estado: true,
            admin: true
        }
    })

    return NextResponse.json({message: "Ok", user}, { status: 200 })
}