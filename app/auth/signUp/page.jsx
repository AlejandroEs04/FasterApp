'use client'
import { useCallback, useEffect } from 'react'
import { signIn } from "next-auth/react"
import useFaster from "../../../hooks/useFaster"
import Alerta from "../../../components/Alerta"

const LogUpPage = () => {
    const { 
        setNombre, 
        nombre,
        setApellido, 
        apellido, 
        setNumero, 
        numero,
        setCorreo, 
        correo, 
        setPassword, 
        password,
        handleChangeForm, 
        form, 
        handleCreateAccount,
        calleNumero,
        colonia,
        CP,
        alerta
    } = useFaster()

    const comprobarInfo = useCallback(() => {
        return nombre === '' || apellido === '' || numero === '' || correo === '' || password === '' || password.length <= 9
    }, [nombre, apellido, numero, correo, password])

    useEffect(() => {
        comprobarInfo()
    }, [nombre, apellido, numero, correo, password])

    return (
        <div className="flex justify-center">
          <div className="flex flex-col gap-10 text-center my-20 mx-5 bg-white px-10 py-10 rounded-2xl">
            <div>
              <h2 className="font-bold text-4xl text-blue-900 uppercase">Crear Cuenta</h2>
              <p className="text-3xl mt-5">Ingresa tus datos para crear una cuenta</p>
            </div>

            {alerta && (
                <Alerta 
                    alerta={alerta}
                />
            )}
    
            <form 
                className="flex flex-col gap-5"
                onSubmit={e => {
                    e.preventDefault()
                    handleCreateAccount()
                }}
            >
                <div className="flex gap-5">
                    <div className="flex flex-col text-start gap-2">
                        <label htmlFor="nombre" className="text-3xl font-bold text-blue-900">Nombre</label>
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            className="border-2 px-2 py-1 rounded-md w-full text-3xl"
                            id="nombre"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col text-start gap-2">
                        <label htmlFor="apellido" className="text-3xl font-bold text-blue-900">Apellido</label>
                        <input 
                            type="text" 
                            placeholder="Apellido" 
                            className="border-2 px-2 py-1 rounded-md w-full text-3xl"
                            id="apellido"
                            value={apellido}
                            onChange={e => setApellido(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col text-start gap-2">
                    <label htmlFor="numero" className="text-3xl font-bold text-blue-900">Numero</label>
                    <input 
                        type="number" 
                        placeholder="Numero" 
                        className="border-2 px-2 py-1 rounded-md w-full text-3xl"
                        id="numero"
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                    />
                </div>

                <div className="flex flex-col text-start gap-2">
                    <label htmlFor="correo" className="text-3xl font-bold text-blue-900">Correo</label>
                    <input 
                        type="email" 
                        placeholder="Correo" 
                        className="border-2 px-2 py-1 rounded-md w-full text-3xl"
                        id="correo"
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                    />
                </div>
        
                <div className="flex flex-col text-start gap-2">
                    <label htmlFor="password" className="text-3xl font-bold text-blue-900">Contrasena</label>
                    <input 
                        type="password" 
                        placeholder="Contrasena" 
                        className="border px-2 py-1 rounded-md w-full text-3xl"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div>
                        <p className=' text-xl text-gray-500' >La contraseña debe tener al menos 10 caracteres</p>
                    </div>
                </div>                
    
              <button
                disabled={comprobarInfo()}
                className={`${comprobarInfo() ? 'bg-indigo-100 text-indigo-500' : 'bg-blue-700 text-white hover:bg-blue-800'}  px-5 py-2  font-bold rounded-lg mt-5 `}
              >
                Crear cuenta
              </button>
            </form>
    
            <div className="flex flex-col gap-2 text-start items-start">
              <p className="text-2xl">¿Ya tienes cuenta?</p>
              <button onClick={() => signIn()} className="text-2xl font-bold text-amber-500 hover:text-amber-600" >Inicia Sesion</button>
            </div>
          </div>
        </div>
    )
}

export default LogUpPage
