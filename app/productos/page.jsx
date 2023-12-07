'use client'
import styles from '../../styles/productos.module.css'
import useFaster from '../../hooks/useFaster'
import NavSimple from '../../components/NavSimple'
import ProductoContainer from '../../components/ProductoContainer'

const ProductosPage = () => {
  const { productos, categorias } = useFaster()

  const links = [
    {
      link: '/',
      name: 'Inicio'
    },
    {
      link: '/productos',
      name: 'Productos'
    },
  ]

  const rangos = [
    {
      id: 1,
      rango: 'Todos los precios'
    },
    {
      id: 2,
      rango: '100 a 500'
    },
    {
      id: 3,
      rango: '600 a 1000'
    },
    {
      id: 4,
      rango: '1100 a mas'
    },
  ]

  return (
    <main>
      <NavSimple 
        links={links}
      />

      <div className='contenedor flex flex-col gap-10 md:flex-row'>
        <div className='w-full sm:w-3/12'>
          <h3 className='text-5xl font-bold text-amber-500'>Filtros</h3>

          <div className='bg-white rounded-md p-5 text-start mt-10 flex flex-col gap-5'>
            <div>
              <label className='text-blue-900 font-bold text-3xl'>Categorias</label>
              <select className='w-full bg-transparent border-2 px-5 py-2 rounded-lg'>
                <option>-- Seleccione --</option>
                {categorias?.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                ))}
              </select>
            </div>

            <div>
              <label className='text-blue-900 font-bold text-3xl'>Precios</label>
              <select className='w-full bg-transparent border-2 px-5 py-2 rounded-lg'>
                {rangos?.map(rango => (
                  <option key={rango.id} value={rango.id}>{rango.rango}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='w-full sm:w-9/12'>
          <h1 className='text-5xl font-bold text-blue-900'>Productos</h1>
          <div className={`${styles.listadoGridProductos} mt-10`}>
            {productos?.map(producto => (
              <ProductoContainer 
                key={producto.id}
                producto={producto}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductosPage
