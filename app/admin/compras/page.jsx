'use client'
import { useEffect, useState } from "react"
import ListadoCompras from "../../../components/ListadoCompras"
import useAdmin from "../../../hooks/useAdmin"

const ComprasPage = () => {
    const { getCompras, compras } = useAdmin()

    const getComprasInfo = async() => {
        await getCompras()
    }

    useEffect(() => {
        getComprasInfo()
    }, [])

    return (
        <div className='contenedor'>
            <h2 className="text-4xl font-bold text-blue-950">Compras</h2>
            <p>Ver las compras que se han realizado</p>

            <div className="mt-10">
                <ListadoCompras 
                    compras={compras}
                />
            </div>
        </div>
    )
}

export default ComprasPage
