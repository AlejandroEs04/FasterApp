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
            <div className="mt-10 flex-col">
                <div className="mb-10">
                    <AutoComplete />
                </div>
                <table className="w-full bg-white px-10 py-5">
                    <thead>
                        <tr className="border-b border-gray-900">
                            <th className="px-2 py-1">ID</th>
                            <th className="px-2 py-1">Nombre</th>
                            <th className="px-2 py-1">Cantidad</th>
                            <th className="px-2 py-1">Precio</th>
                            <th className="px-2 py-1">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listaTicket?.map(productoTicket => (
                            <tr key={productoTicket.id} className="border-gray-900 border-y">
                                <th className="px-2 py-2 border-r-2 border-gray-900 font-normal">{productoTicket.id}</th>
                                <th className="px-2 py-2 border-r-2 border-gray-900 font-normal">{productoTicket.nombre}</th>
                                <th className="px-2 py-2 border-r-2 border-gray-900 font-normal">{productoTicket.cantidad}</th>
                                <th className="px-2 py-2 border-r-2 border-gray-900 font-normal">{formatearDinero(productoTicket.precio)}</th>
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

                <div className="flex gap-10 justify-center">
                    <button 
                        onClick={e => saveBuy(total, cant)}
                        download
                        className="bg-amber-500 hover:bg-amber-600 font-bold px-5 py-2 rounded-xl mt-10 text-white"
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
                        className="bg-blue-800 hover:bg-blue-950 font-bold px-5 py-2 rounded-xl mt-10 text-white"
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
