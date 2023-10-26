import { ImageResponse } from 'next/server'
 
export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 48, height: 48 },
      id: 'small',
    },
    {
      contentType: 'image/png',
      size: { width: 72, height: 72 },
      id: 'medium',
    },
  ]
}
 
export const POST = async (req: Request, res: Response) => {

  return new ImageResponse(
    (
      <div 
        style={{
          backgroundColor: "white",
          width: 500,
          display: "flex",
          flexDirection: "column",
          padding: '25px 50px',
        }}
      >
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
            RFC: El RFC
          </div>

          <div style={{ fontSize: 15, textAlign: "start" }}>
            Nota: 0001
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
          </div>
        </div>
      </div>
    )
  )
}