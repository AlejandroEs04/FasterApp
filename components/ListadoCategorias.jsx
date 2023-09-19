'use client'
import useAdmin from '../hooks/useAdmin'

const ListadoCategorias = () => {

    const { categorias } = useAdmin()

    console.log(categorias.length)

    return (
        <div className='mt-10'>
            {categorias.length > 0 ? (
                <h2>Ya hay categorias</h2>
            ) : (
                <h2 className='font-bold text-4xl text-amber-500'>Aun no hay categorias</h2>
            )}
        </div>
    )
}

export default ListadoCategorias
