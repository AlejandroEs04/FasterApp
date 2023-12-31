import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt'
import generarId from '../../../helpers/generarId'

const prisma = new PrismaClient()

interface RequestBody {
    nombre: string
    apellido: string
    correo: string
    password: string
    numero: string 
    token: string
    calleNumero: string
    colonia: string
    codigoPostal: number
    ciudad: string
    estado: string
}

export async function POST(request:Request) {
    const body:RequestBody = await request.json()


    const usuario = await prisma.usuario.findFirst({
        where: {
            correo: body.correo
        }
    })

    if(usuario) {
        const error = new Error("El usuario ya existe")
        return NextResponse.json({msg: error.message}, {status: 400})
    }

    try {
        const user = await prisma.usuario.create({
            data: {
                nombre: body.nombre,
                apellido: body.apellido,
                correo: body.correo,
                password: await bcrypt.hash( body.password , 10),
                numero: body.numero,
                token: generarId(),
                calleNumero: !body.calleNumero ? "" : body.calleNumero,
                colonia: !body.colonia ? "" : body.colonia,
                codigoPostal: !body.codigoPostal ? 0 : body.codigoPostal,
                ciudad: !body.ciudad ? "" : body.ciudad,
                estado: !body.estado ? "" : body.estado, 
            }
        })

        const { password, ...result } = user;

        return NextResponse.json({msg: "Ok", body}, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({msg: "Error", error}, { status: 500 })
    }
}
