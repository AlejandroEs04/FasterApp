import styles from '../styles/productos.module.css'
import Image from "next/image"
import Link from "next/link"
import {formatearDinero} from '../helpers'

const ProductoContainer = ({producto, wth}) => {

    const { precio } = producto

    return (
        <Link href={`/productos/${producto.id}`} className={`bg-white h-full ${wth && 'w-80'} flex flex-col gap-4 items-center justify-around px-1 py-10 mx-4 hover:scale-105`}>
            <div className="p-2 h-1/2">
                <Image src={producto.imagen} alt={`Imagen Producto ${producto.nombre}`} width={90} height={90} className="w-auto h-48" />
            </div>

            <div className="py-2 px-2 h-1/2 flex flex-col justify-between">
                <div>
                    <p className="text-3xl font-bold">{producto.nombre}</p>
                    <p className={`text-2xl mt-2 ${styles.descripcion}`}>{producto.descripcion}</p>
                </div>
                
                <div>
                    <p className="text-amber-500 font-extrabold text-4xl mt-5">{formatearDinero(precio)}</p> 
                    {producto.inventario <= 0 && (
                        <p className="text-red-500 text-2xl">No disponible</p>
                    )} 
                </div>
            </div>
        </Link>
  )
}

export default ProductoContainer
