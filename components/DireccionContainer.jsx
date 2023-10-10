'use client'
import { useEffect, useState } from "react"
import useFaster from "../hooks/useFaster"

const DireccionContainer = () => {
    const [direccion, setDireccion] = useState({})

    const { getDireccion } = useFaster()

    const getDireccionObject = async() => {
        const direcciones = await getDireccion()
    }

    useEffect(() => {
        getDireccionObject()
    }, [])

    return (
        <div className='bg-white rounded-md mt-5'>
            <p>No hay direccion</p>
        </div>
    )
}

export default DireccionContainer
