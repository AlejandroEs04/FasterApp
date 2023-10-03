import axios from "axios"
import Image from "next/image"
import NavSimple from '../../../components/NavSimple'
import { formatearDinero } from "../../../helpers"
import FormularioCantidad from '../../../components/FormularioCantidad'
import ClienteListadoProductos from "../../../components/ClienteListadoProductos"

const obtenerItemTipo = async(tipo, elementoId) => {
  const { data } = await axios(`http://localhost:3000/api/${tipo}/${elementoId}`)
  return data.producto[0]
}

const ProductoPage = async({ params }) => {
  
    const producto = await obtenerItemTipo('productos', params.id)

    const links = [
      {
        link: '/',
        name: 'Inicio'
      },
      {
        link: '/productos',
        name: 'Productos'
      },
      {
        link: `/productos/${producto.id}`,
        name: producto.nombre
      }
    ]

    return (
      <main>
        <NavSimple 
          links={links}
          bg={true}
        />
        <div className="flex flex-col sm:flex-row bg-white gap-10 md:px-10 py-5 items-center">
          <div className="w-full flex sm:1/2 justify-center items-center md:w-2/5 border-r-2 py-10">
            <Image src={producto.imagen} alt={`Imagen producto ${producto.nomnre}`} className="w-4/5" width={250} height={250} />
          </div>

          <div className="w-full sm:w-1/2 md:w-3/5 p-10">
            <h2 className="text-5xl uppercase font-bold text-blue-900">{producto.nombre}</h2>
            <p className="text-3xl mt-5 font-semibold">{producto.descripcion}</p>
            <p className="text-2xl mt-2">Marca</p>

            <p className="font-extrabold text-6xl text-amber-500 my-10">{formatearDinero(producto.precio)}</p>

            <FormularioCantidad 
              producto={producto}
            />
          </div>
        </div>

        <div className='contenedor flex flex-col gap-10'>
          <div className='flex flex-col gap-5 text-start'>
            <h3 className='text-4xl font-extrabold text-blue-900 pl-4'>Relacionado</h3>
            <ClienteListadoProductos />
          </div>

          <div className='flex flex-col gap-5 text-start'>
            <h3 className='text-4xl font-extrabold text-blue-900 pl-4'>Te puede gustar</h3>
            <ClienteListadoProductos />
          </div>
        </div>
      </main>
    )
}

export default ProductoPage
