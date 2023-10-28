'use client'
import { useEffect, useState } from "react"
import useFaster from "../../../hooks/useFaster"
import ProductosCarrito from "../../../components/ProductosCarrito"
import SeccionTotal from "../../../components/SeccionTotal"

const CarritoPage = () => {
    const [total, setTotal] = useState(0)
    const [cant, setCant] = useState(0)
    const { getCarrito, carrito } = useFaster()

    const getCarritoInfo = async() => {
        await getCarrito()
    }

    useEffect(() => {
        getCarritoInfo()
    }, [])

    useEffect(() => {
        if(carrito.length() >= 1) {
            const calculoTotal = carrito.reduce((total, productoCarrito) => total + (productoCarrito.productoPrecio * productoCarrito.cantidadOProductos), 0)
            setTotal(calculoTotal)
    
            const calculoCant = carrito.reduce((cantidad, productoCarrito) => cantidad + productoCarrito.cantidadOProductos, 0)
            setCant(calculoCant)
        }
    },[carrito])

    return (
        <div className="contenedor">
            <div className='flex flex-col gap-10 md:gap-0 md:flex-row'>
                <div className="flex flex-col w-full md:w-4/6 gap-10">
                    <div className='flex flex-col w-full px-4'>
                        <h2 className="text-blue-900 text-start font-extrabold text-5xl">Carrito</h2>
                        <ProductosCarrito 
                            carrito={carrito}
                        />
                    </div>
                </div>

                <SeccionTotal
                    total={total}
                    cant={cant}
                    carrito={carrito}
                    btn={true}
                    textoBtn={'Proceder con el pago'}
                />
            </div>
        </div>
    )
}

export default CarritoPage
