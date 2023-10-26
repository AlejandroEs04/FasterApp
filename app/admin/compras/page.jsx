import axios from "axios";
import ListadoCompras from "../../../components/ListadoCompras"

const getCompras = async() => {
    const { data } = await axios('http://localhost:3000/api/compras');

    return data.compras
}

const ComprasPage = async() => {
    const compras = await getCompras()

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
