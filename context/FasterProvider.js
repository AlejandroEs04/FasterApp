'use client'
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FasterContext = createContext()

const FasterProvider = ({children}) => {
    const [categorias, setCategorias] = useState(null)
    const [productos, setProductos] = useState(null)
    const [sideBarContainer, setSideBarContainer] = useState(false)

    const obtenerCategorias = async() => {
        const { data } = await axios(`http://localhost:3000/api/categorias`)
        setCategorias(data.categorias)
    }

    const obtenerProductos = async() => {
        const { data } = await axios(`http://localhost:3000/api/productos`)
        setProductos(data.productos)
    }

    useEffect(() => {
        obtenerCategorias()
        obtenerProductos()
    }, [])

    const handleChangeSideBar = () => {
        setSideBarContainer(!sideBarContainer)
    }

    return (
        <FasterContext.Provider
            value={{
                categorias,
                productos,
                sideBarContainer,
                handleChangeSideBar
            }}
        >
            {children}
        </FasterContext.Provider>
    )
}

export {
    FasterProvider
}

export default FasterContext

