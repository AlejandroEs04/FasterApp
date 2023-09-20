'use client'
import useAdmin from "../../../hooks/useAdmin"
import ListadoProveedores from '../../../components/ListadoProveedores'

const ProveedoresPage = () => {
  const { handleChangeModal } = useAdmin()

  return (
    <div className='contenedor'>
      <h2 className="text-4xl font-bold">Proveedores</h2>

      <div>
        <button className="flex items-center gap-4" onClick={() => handleChangeModal('proveedores')}>
          <p className="text-3xl">Agregar Proveedor</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>

        <ListadoProveedores />
      </div>
    </div>
  )
}

export default ProveedoresPage
