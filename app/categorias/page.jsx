'use client'
import Image from "next/image";
import Link from "next/link";
import NavSimple from "../../components/NavSimple";
import useFaster from "../../hooks/useFaster"

const CategoriasPage = () => {
    const { categorias } = useFaster();

    const links = [
        {
          link: '/',
          name: 'Inicio'
        },
        {
          link: '/categorias',
          name: 'Categorias'
        },
      ]

    return (
        <main>
            <NavSimple 
                links={links}
            />

            <div className="flex flex-col contenedor" >
                <h1 className='text-5xl font-bold text-blue-900'>Categorias</h1>
                <p className="text-2xl font-bold mt-5" >Haz click sobre las categorias para ver sus productos</p>
                <div className="flex gap-4 flex-wrap mt-10 justify-center items-center" >
                    {categorias?.map(categoria => (
                        <Link 
                            href={`/categorias/${categoria.id}`}
                            key={categoria.id}
                            className="flex flex-col items-center justify-center bg-white p-5 w-56 h-56 rounded-xl gap-2 hover:scale-105 transition-transform"
                        >
                            <p className="font-bold text-3xl text-blue-900" >{categoria.nombre}</p>
                            <Image 
                                src={categoria.icono} 
                                alt={`Imagen categoria ${categoria.nombre}`} 
                                width={50} height={50} 
                                className="h-full w-auto"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default CategoriasPage
