'use client'
import Link from 'next/link'
import { AdminProvider } from '../../context/AdminProvider'
import ModalContenedor from '../../components/ModalContenedor'
import AlertPopUp from '../../components/AlertPopUp'

const layout = ({children}) => {
  return (
    <AdminProvider>
        <main className='flex h-full'>
            <aside className='hidden md:flex md:flex-col md:w-1/5 bg-slate-900 pt-10 px-6 text-white'>
                <div className='hidden md:flex md:flex-col' >
                    <h3 className='text-4xl font-extrabold mb-10'>Navegacion</h3>
                    <nav className='flex flex-col gap-6'>
                        <Link href={'/admin'} className='flex items-center text-white font-normal gap-5 hover:gap-6'>
                            <p>Crear Ticket</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link href={'/admin/productos'} className='flex items-center text-white font-normal gap-5 hover:gap-6'>
                            <p>Productos</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                            </svg>

                        </Link>
                        <Link href={'/admin/categorias'} className='flex items-center text-white font-normal gap-5 hover:gap-6'>
                            <p>Categorias</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link href={'/admin/proveedores'} className='flex items-center text-white font-normal gap-5 hover:gap-6'>
                            <p>Proveedores</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link href={'/admin/compras'} className='flex items-center text-white font-normal gap-5 hover:gap-6'>
                            <p>Compras</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </nav>
                </div>

                <p className='mt-20 text-2xl font-bold'>Zona de administracion</p>
            </aside>

            <div className='md:w-4/5 w-full mb-10 px-4'>
                {children}
            </div>

            
        </main>

        <ModalContenedor />
        <AlertPopUp />
    </AdminProvider>
  )
}

export default layout
