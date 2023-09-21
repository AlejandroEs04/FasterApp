'use client'
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FasterContext = createContext()

const FasterProvider = ({children}) => {
    const [categorias, setCategorias] = useState(null)

    const [sideBarContainer, setSideBarContainer] = useState(false)

    const obtenerCategorias = async() => {
        const { data } = await axios(`http://localhost:3000/api/categorias`)
        setCategorias(data.categorias)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    const handleChangeSideBar = () => {
        setSideBarContainer(!sideBarContainer)
    }

    return (
        <FasterContext.Provider
            value={{
                categorias,
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

