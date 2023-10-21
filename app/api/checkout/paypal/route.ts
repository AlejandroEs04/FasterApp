import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const POST = async(req:Request, res:Response) => {
    const { data } = await req.json()
    
    try {
        await prisma.paypalToken.create({
            data: {
                orderId: data.orderID,
                payerId: data.payerID, 
                paymentId: data.paymentID,
                facilitatorAccesToken: data.facilitatorAccessToken,
            }
        })

        return NextResponse.json({msg: "Ok"}, { status: 200 })
    } catch (error) {
        console.log(error)
    }

    
}