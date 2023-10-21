'use client'
import { useEffect, useState } from "react"
import useFaster from "../../hooks/useFaster"
import ProductosCarrito from "../../components/ProductosCarrito"
import SeccionTotal from "../../components/SeccionTotal"
import DireccionContainer from '../../components/DireccionContainer'

const ComprarPage = () => {
    const [total, setTotal] = useState(0)
    const [cant, setCant] = useState(0)
    const [envio, setEnvio] = useState(99)
    const { getDireccion, carrito, direccion } = useFaster()

    const getDireccionObject = async() => {
        await getDireccion()
    }

    useEffect(() => {
        getDireccionObject()
    }, [])

    useEffect(() => {
        if(carrito.length >= 1) {
            const calculoTotal = carrito.reduce((total, productoCarrito) => total + (productoCarrito.productoPrecio * productoCarrito.cantidadOProductos), 0)
            setTotal(calculoTotal)
    
            const calculoCant = carrito.reduce((cantidad, productoCarrito) => cantidad + productoCarrito.cantidadOProductos, 0)
            setCant(calculoCant)
        }
    },[])

    return (
        <div className="contenedor">
            <div className='flex flex-col gap-10 md:gap-0 md:flex-row'>
                <div className="flex flex-col w-full md:w-4/6 gap-10">
                    <div className='flex flex-col w-full px-4'>
                        <h2 className="text-amber-500 font-extrabold text-5xl">Productos</h2>
                        <ProductosCarrito 
                            carrito={carrito}
                            compraSection={true}
                        />
                    </div>

                    <div className='flex flex-col w-full px-4'>
                        <h2 className="text-amber-500 font-extrabold text-5xl">Direccion</h2>
                        <DireccionContainer 
                            direccion={direccion}
                        />
                    </div>
                </div>

                <div className="w-full md:w-2/6">
                    <SeccionTotal
                        total={total}
                        cant={cant}
                        carrito={carrito}
                        btn={false}
                        envio={envio}
                    />
                </div>
            </div>
        </div>
    )
}

export default ComprarPage