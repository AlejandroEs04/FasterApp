'use client'
import { useState, useEffect } from "react"
import AutoComplete from './AutoComplete'
import useFaster from "../hooks/useFaster"
import useAdmin from "../hooks/useAdmin";
import { formatearDinero } from "../helpers";
import Ticket from "./Ticket";

const TablaTicket = () => {
    const [total, setTotal] = useState(0)
    const [cant, setCant] = useState(0)
    const {listaTicket, saveBuy, ticket, setListaTicket, setTicket} = useAdmin()

    useEffect(() => {
        if(listaTicket.length >= 1) {
            const calculoTotal = listaTicket.reduce((total, producto) => total + (producto.cantidad * (producto.precio + (producto.precio * .16))), 0)
            setTotal(calculoTotal)

            const calculoCant = listaTicket.reduce((cantidad, producto) => cantidad + producto.cantidad, 0)
            setCant(calculoCant)
        }
        
    },[listaTicket])

    return (
            <div className="mt-10 flex-col overflow-x-hidden">
                <div className="mb-10">
                    <AutoComplete />
                </div>
                <div className="cajon overflow-x-scroll md:overflow-x-hidden pb-4" >
                    <table className="min-w-full w-max bg-white px-10 py-5 ">
                        <thead>
                            <tr className="border-b border-gray-900">
                                <th className="px-2 py-1 text-2xl">ID</th>
                                <th className="px-2 py-1 text-2xl">Nombre</th>
                                <th className="px-2 py-1 text-2xl">Cantidad</th>
                                <th className="px-2 py-1 text-2xl">Precio</th>
                                <th className="px-2 py-1 text-2xl">Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listaTicket?.map(productoTicket => (
                                <tr key={productoTicket.id} className="border-gray-900 border-y">
                                    <th className="px-2 py-2 border-r-2 border-gray-900 font-normal text-2xl">{productoTicket.id}</th>
                                    <th className="px-2 py-2 border-r-2 border-gray-900 font-normal text-2xl">{productoTicket.nombre}</th>
                                    <th className="px-2 py-2 border-r-2 border-gray-900 font-normal text-2xl">{productoTicket.cantidad}</th>
                                    <th className="px-2 py-2 border-r-2 border-gray-900 font-normal text-2xl">{formatearDinero(productoTicket.precio)}</th>
                                    <th className="px-2 py-2 font-normal">{formatearDinero(productoTicket.precio * productoTicket.cantidad)}</th>
                                </tr>
                            ))}

                            <tr>
                                <th></th>
                                <th className="px-2 py-2 border-l-2 border-gray-900 text-end">Productos Totales:</th>
                                <th className="px-2 py-2 border-l-2 border-r-2 border-r-gray-900 text-start text-blue-900">{cant}</th>
                                <th>Total:</th>
                                <th className="text-blue-900">{formatearDinero(total)}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex md:flex-row flex-col md:gap-10 gap-4 justify-center">
                    <button 
                        onClick={e => saveBuy(total, cant)}
                        download
                        className="bg-amber-500 hover:bg-amber-600 text-3xl font-bold px-5 py-2 rounded-xl sm:mt-10 mt-4 text-white"
                    >
                        Guardar Ticket
                    </button>

                    <button 
                        onClick={() => {
                            setListaTicket([])
                            setTotal(0)
                            setCant(0)
                            setTicket(null)
                        }}
                        className="bg-blue-800 hover:bg-blue-950 text-3xl font-bold px-5 py-2 rounded-xl sm:mt-10 mt-0 text-white"
                    >
                        Reiniciar Ticket
                    </button>
                </div>

                <div className="flex justify-center mt-10">
                    {ticket && (
                        <Ticket 
                            total={total}
                            cantidad={cant}
                        />
                    )}
                </div>
                
            </div>
    )
}

export default TablaTicket
