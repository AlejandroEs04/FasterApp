import { ImageResponse } from 'next/server'
import { PrismaClient } from "@prisma/client";
import { formatearDinero } from '../../../../helpers';

const prisma = new PrismaClient()
 
export const GET = async (request, { params }) => {
    const compra = await prisma.compra.findFirst({
        where: {
            id: +params.id
        },
        include: {
            productosCompra: {
                include: {
                    producto: true
                }
            }
        }
    })

    return new ImageResponse(
        (
        <div 
            style={{
            backgroundColor: "white",
            width: 420,
            display: "flex",
            flexDirection: "column",
            padding: '25px 50px',
            }}
        >
            <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", justifyContent: "center", fontSize: 25, marginBottom: 10, fontWeight: "bold"}}>
                Faster
            </div>

            <div style={{display: "flex",  fontSize: 15, textAlign: "start" }}>
                Atendio: Carlos Alejandro Estrada Martinez
            </div>

            <div style={{ display: "flex", fontSize: 15, textAlign: "start" }}>
                Direccion: Varsovia #917, Col. El Refugio 
            </div>

            <div style={{ display: "flex", fontSize: 15, textAlign: "start" }}>
                Telefono: 8112882028
            </div>

            <div style={{ display: "flex", fontSize: 15, textAlign: "start" }}>
                RFC: El RFC
            </div>

            <div style={{ display: "flex", fontSize: 15, textAlign: "start" }}>
                Nota: {compra.id}
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                marginTop: 20,
                borderBottom: '1px solid black',
                borderTop: '1px solid black'
            }}>
                <div
                style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 15,
                }}
                >
                <div
                    style={{
                        display: "flex", 
                        width: 10
                    }}
                >
                    ID
                </div>

                <div
                    style={{
                        display: "flex", 
                        width: 200
                    }}
                >
                    Nombre
                </div>

                <div
                    style={{
                        display: "flex", 
                        width: 100
                    }}
                >
                    Precio
                </div>

                <div
                    style={{
                        display: "flex", 
                        width: 10
                    }}
                >
                    Cant
                </div>
            </div>
                {compra.productosCompra?.map(productoLista => (
                    <div
                        style={{
                            display: "flex",
                            gap: 10,
                            fontSize: 15
                        }}
                        key={productoLista.producto.id}
                    >
                        <div style={{
                            display: "flex", 
                            width: 10
                        }}>
                            {productoLista.producto.id}
                        </div>

                        <div
                            style={{
                                display: "flex", 
                            width: 200
                            }}
                        >
                            {productoLista.producto.nombre}
                        </div>

                        <div
                            style={{
                                display: "flex", 
                                width: 100
                            }}
                        >
                            {formatearDinero(productoLista.producto.precio)}
                        </div>

                        <div
                            style={{
                                display: "flex",    
                            width: 10
                            }}
                        >
                            {productoLista.cantidad}
                        </div>
                    </div>
              ))}
            </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 20
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}> Subtotal: {formatearDinero(compra.total - (compra.total * .16))} </div>
                <div style={{ display: "flex", flexDirection: "column" }}> Iva: {formatearDinero(compra.total * .16)} </div>
                <div style={{ display: "flex", flexDirection: "column" }}> Total: {formatearDinero(compra.total)} </div>


                <div style={{ display: "flex", flexDirection: "column", marginTop: 25, fontSize: 13 }}> ** VUELVA PRONTO ** </div>
                <div style={{ display: "flex", flexDirection: "column", fontSize: 13 }}> ** GRACIAS POR SU COMPRA ** </div>
            </div>
        </div>
        ),
        {
            width: 420    
        }
    )
}