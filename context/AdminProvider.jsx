'use client'
import axios from "axios"
import { createContext, useState, useEffect } from "react"

const AdminContext = createContext()

const AdminProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState([])
    const [categorias, setCategorias] = useState({})

    const obtenerCategorias = async () => {
        const { data } = await axios('http://localhost:3000/api/categorias')
        setCategorias(data.categorias)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    return (
        <AdminContext.Provider
            value={{
                categorias
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export {
    AdminProvider
}

export default AdminContext