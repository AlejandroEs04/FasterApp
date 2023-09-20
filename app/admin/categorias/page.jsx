'use client'
import ListadoCategorias from '../../../components/ListadoCategorias'
import useAdmin from '../../../hooks/useAdmin'

const CategoriasPage = () => {

  const { handleChangeModal } = useAdmin()

  return (
    <div className='contenedor'>
      <h2 className="text-4xl font-bold text-blue-950">Categorias</h2>

      <div>
        <button className="flex items-center gap-4" onClick={() => handleChangeModal('categorias')}>
          <p className="text-3xl">Agregar Categoria</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>

        <ListadoCategorias />
      </div>
    </div>
  )
}

export default CategoriasPage
