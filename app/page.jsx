import ClienteListadoCategorias from '../components/ClienteListadoCategorias'
import ClienteListadoProductos from '../components/ClienteListadoProductos'
import SliderContainer from '../components/SliderContainer'

export default function Home() {
  return (
    <main>
      <div>
        <SliderContainer />
      </div>
        
      <ClienteListadoCategorias />

      <a href='http://localhost:3000/api/ticket' download >Descargar</a>

      <div className='contenedor flex flex-col gap-10'>
        <div className='flex flex-col gap-5 text-start'>
          <h3 className='text-4xl font-extrabold text-blue-900 pl-4'>Populares</h3>
          <ClienteListadoProductos />
        </div>

        <div className='flex flex-col gap-5 text-start'>
          <h3 className='text-4xl font-extrabold text-blue-900 pl-4'>Agregados recientemente</h3>
          <ClienteListadoProductos />
        </div>
      </div>
    </main>
  )
}
