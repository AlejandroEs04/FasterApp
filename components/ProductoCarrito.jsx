'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
import FormularioCantidad from "./FormularioCantidad"
import { formatearDinero } from "../helpers"

const ProductoCarrito = ({producto}) => {

  const path = usePathname()

  return (
    <div className="flex border-b-2 last-of-type:border-none w-full pb-5 gap-20 items-center px-5">
      <div className="w-1/5 flex justify-center items-center">
        <Image 
          src={producto.productoImg} 
          width={100} height={100} 
          alt={`Imagen de producto ${producto.productoNombre}`} 
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col text-start items-start w-4/5">
        <p><span className="font-bold text-3xl">Nombre:</span> {producto.productoNombre}</p>
        <p className="font-bold text-3xl">Precio: <span className="text-amber-500">{formatearDinero(producto.productoPrecio)}</span></p>
        
        {path !== '/comprar' && (
          <div className="mt-5">
            <FormularioCantidad 
              producto={producto}
              tipoButton={'guardar'}
            />
          </div>
        )}
        
      </div>
    </div>
  )
}

export default ProductoCarrito
