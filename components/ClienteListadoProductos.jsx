'use client'
import useFaster from "../hooks/useFaster"
import ProductoContainer from './ProductoContainer'
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import 'react-horizontal-scrolling-menu/dist/styles.css';

const ClienteListadoProductos = ({tipo}) => {

    const { productos } = useFaster()

    if(tipo) {
        console.log(tipo)
    }

    return (
        <ScrollMenu>
        {productos?.slice(0, 10).map(producto => (
            <ProductoContainer 
                key={producto.id}
                producto={producto}
            />
        ))}
        </ScrollMenu>
    )
}

export default ClienteListadoProductos
