'use client'
import Link from 'next/link'
import useFaster from '../hooks/useFaster'
import CategoriaContainer from './CategoriaContainer'
import { LeftArrow, RightArrow } from './Arrows'
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import 'react-horizontal-scrolling-menu/dist/styles.css';

const ClienteListadoCategorias = () => {

    const { categorias } = useFaster()

    return (
        <div className='bg-white flex flex-col'>
            <div className='sm:flex flex-wrap justify-around gap-10 px-40 py-14 hidden'>
                {categorias?.slice(0, 8).map(categoria => (
                    <CategoriaContainer 
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </div>

            <div className='mx-5 sm:hidden my-10'>
                <ScrollMenu>
                    {categorias?.slice(0, 8).map(categoria => (
                        <CategoriaContainer 
                            key={categoria.id}
                            categoria={categoria}
                        />
                    ))}
                </ScrollMenu>
            </div>

            <Link href={`/categorias`} className='text-center font-bold text-blue-950 hover:text-blue-800 pb-5'>Ver todas las categorias</Link>
        </div>
    )
}

export default ClienteListadoCategorias
