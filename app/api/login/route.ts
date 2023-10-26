import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt'
import { signJwtAccessToken } from "../../../prisma/jwt";

const prisma = new PrismaClient()

interface RequestBody {
    correo: string;
    password: string;
}

export async function POST(request:Request) {
    const body:RequestBody = await request.json()
    
    const user = await prisma.usuario.findFirst({
        where: {
            correo:body.correo,
        }
    })

    if(!user) {
        const error = new Error("El usuario no existe")
        return NextResponse.json({msg: error.message}, {status: 400})
    }

    if(!await bcrypt.compare(body.password, user.password)) {
        const error = new Error("La contrasena es incorrecta")
        return NextResponse.json({msg: error.message}, {status: 400})
    }

    console.log("sigue")
    const { password, ...userInfo } = user
    const accessToken  = signJwtAccessToken(userInfo)
    const result = {
        ...userInfo,
        accessToken
    }

    return NextResponse.json({result}, { status: 200 })
}