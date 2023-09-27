'use client'
import React, { useState } from 'react'
import NextAuth from 'next-auth/next'
import Link from 'next/link'

const LoginPage = () => {
  const [nomUsuario, setNomUsuario] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='flex justify-center contenedorLogin'>
        <div className='bg-white w-full flex items-center py-10 flex-col gap-10 rounded-xl'>
          <div className='flex flex-col items-center'>
            <h2 className='font-bold text-4xl'>Inicia sesion</h2>
            <p className='text-2xl'>Ingresa tus datos para iniciar sesion</p>
          </div>

          <form className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <label className='text-2xl font-bold' htmlFor='usuario' >Nombre de usuario</label>
              <input type='text' id='usuario' placeholder='Nombre de usuario' className='text-2xl border-2 border-amber-500 rounded-lg py-1 px-2' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-2xl font-bold' htmlFor='password'>Contrasena</label>
              <input type='password' id='password' placeholder='Contrasena' className='text-2xl border-2 border-amber-500 rounded-lg py-1 px-2' />
            </div>

            <button 
              className={`bg-amber-500 text-white hover:bg-amber-600 font-bold rounded-md`}
            >
              Iniciar sesion
            </button>
          </form>
           
           <div className='flex flex-col items-start'>
            <p className='text-amber-600 font-bold text-2xl'>¿Aun no tienes cuenta?</p>
            <Link href={'/crear-cuenta'} className='text-2xl text-blue-950 font-bold hover:text-blue-800'>Crear Cuenta</Link>
           </div>
        </div>
      
    </div>
  )
}

export default LoginPage
