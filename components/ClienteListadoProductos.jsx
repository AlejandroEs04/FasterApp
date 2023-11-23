'use client'
import useFaster from "../hooks/useFaster"
import ItemsScroll from "./ItemsScroll"

const ClienteListadoProductos = ({tipo}) => {
    const { productos } = useFaster()

    return (
        <ItemsScroll 
            items={productos}
        />
    )
}

export default ClienteListadoProductos
