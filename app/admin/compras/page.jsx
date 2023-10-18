import ListadoCompras from "../../../components/ListadoCompras"

const ComprasPage = () => {
    return (
        <div className='contenedor'>
            <h2 className="text-4xl font-bold text-blue-950">Compras</h2>
            <p>Ver las compras que se han realizado</p>

            <div className="mt-10">
                <ListadoCompras />
            </div>
        </div>
    )
}

export default ComprasPage
