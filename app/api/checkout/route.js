import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_SECRET_KEY;

const enviroment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(enviroment);

export async function POST(req, res) {
    const { data } = await req.json()
    let request = new paypal.orders.OrdersCreateRequest();

    request.requestBody({
        "intent": "CAPTURE",
        "purchase_units": [
            {   
                "amount": {
                    currency_code: "USD",
                    value: data.total
                },
                "description": "Compra de un producto"
            }
        ]
    })

    const response = await client.execute(request);

    return NextResponse.json({
        id: response.result.id
    })
}