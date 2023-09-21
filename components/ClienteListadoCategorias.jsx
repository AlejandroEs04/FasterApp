'use client'
import Link from 'next/link'
import useFaster from '../hooks/useFaster'
import CategoriaContainer from './CategoriaContainer'

const ClienteListadoCategorias = () => {

    const { categorias } = useFaster()

    return (
        <div className='bg-white flex flex-col'>
            <div className='flex flex-wrap justify-around gap-10 px-40 py-14'>
                {categorias?.slice(0, 8).map(categoria => (
                    <CategoriaContainer 
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </div>

            <Link href={`/categorias`} className='text-center font-bold text-blue-950 hover:text-blue-800 pt-10 pb-5'>Ver todas las categorias</Link>
        </div>
    )
}

export default ClienteListadoCategorias
