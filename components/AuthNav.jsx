'use client'
import Link from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react'

const AuthNav = () => {
    const { data: session } = useSession()

    return (
        <div className='flex flex-col gap-10 items-end md:flex-row md:items-center'>
            <Link href={'/usuario'} className='text-2xl flex items-center gap-3 font-bold text-white hover:scale-110'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className='flex md:hidden'>Cuenta</p>
            </Link>
            <Link href={'/usuario/carrito'} className='text-2xl flex items-center gap-3 font-bold text-white hover:scale-110'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <p className='flex md:hidden'>Carrito</p>
            </Link>

            {session && session.user ? (
                <button
                    onClick={() => signOut()}
                    className='text-2xl bg-red-600 px-2 py-1 rounded-lg hover:bg-red-700 font-bold'
                >
                    Cerrar Sesion
                </button>
            ) : (
                <button
                    onClick={() => signIn()}
                    className='text-2xl bg-amber-500 px-2 py-1 rounded-lg hover:bg-amber-600 font-bold'
                >
                    Iniciar sesion
                </button>
            )}        
        </div>
    )
  
    
}

export default AuthNav
