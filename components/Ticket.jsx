'use client'
import { formatearDinero } from "../helpers"
import useAdmin from "../hooks/useAdmin"
import Link from "next/link"

export default function Ticket({cantidad, total}) {

  const { listaTicket, ticket } = useAdmin()

  console.log((ticket*0.00001).toString().split('.')[1]);

  const width = 350

    return (
      <div className="flex flex-col gap-5 items-center">
        <a 
          href={`api/ticket/${ticket}`} 
          download={true}
          className="font-bold bg-gray-500 hover:bg-gray-600 py-2 rounded-xl text-white px-5"
        > Descargar Ticket </a>
        <div style={{
          backgroundColor: "white",
          width,
          display: "flex",
          flexDirection: "column",
          padding: '25px 40px',
        }}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{fontSize: 20, marginBottom: 10}}>
              Faster
            </div>

            <div style={{ fontSize: 15, textAlign: "start" }}>
              Atendio: Carlos Alejandro Estrada Martinez
            </div>

            <div style={{ fontSize: 15, textAlign: "start" }}>
              Direccion: Varsovia #917, Col. El Refugio 
            </div>

            <div style={{ fontSize: 15, textAlign: "start" }}>
              Telefono: 8112882028
            </div>

            <div style={{ fontSize: 15, textAlign: "start" }}>
              Nota: {(ticket*0.00001).toString().split('.')[1]}
            </div>

            <div style={{ fontSize: 15, textAlign: "start" }}>
              Cliente: CONTADO
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
                    width: 10
                  }}
                >
                  ID
                </div>

                <div
                  style={{
                    width: 200
                  }}
                >
                  Nombre
                </div>

                <div
                  style={{
                    width: 100
                  }}
                >
                  Precio
                </div>

                <div
                  style={{
                    width: 10
                  }}
                >
                  Cant
                </div>
              </div>

                {listaTicket?.map(producto => (
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 13
                    }}
                    key={producto.id}
                  >
                    <div style={{
                      width: 10
                    }}>
                      {producto.id}
                    </div>

                    <div
                      style={{
                        width: 200
                      }}
                    >
                      {producto.nombre}
                    </div>

                    <div
                      style={{
                        width: 100
                      }}
                    >
                      {producto.precio}
                    </div>

                    <div
                      style={{
                        width: 10
                      }}
                    >
                      {producto.cantidad}
                    </div>
                    
                  </div>
                ))}
            </div>

            <div style={{fontSize: 15, marginTop: 20}}>
              Subtotal: {formatearDinero(total*.84)}
            </div>

            <div style={{fontSize: 15}}>
              Iva: {formatearDinero(total*.16)}
            </div>

            <div style={{fontSize: 15}}>
              Total: {formatearDinero(total)}
            </div>

            <div style={{fontSize: 12, marginTop: 10, textAlign: 'center'}}>
              Gracias por su preferencia:D
            </div>

            <div style={{fontSize: 12, textAlign: 'center'}}>
              Vuelva pronto
            </div>
          </div>
        </div>
      </div>
    )
}
  