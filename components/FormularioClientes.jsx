'use client'
import { useState, useEffect, useCallback } from "react";
import useAdmin from "../hooks/useAdmin";

const FormularioClientes = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [numero, setNumero] = useState('');

    const { handleSaveClient } = useAdmin();

    const comprobarInfo = useCallback(() => {
        return nombre === '' || apellidos === ''
    }, [nombre, apellidos])

    useEffect(() => {
        comprobarInfo()
    }, [nombre, apellidos])

    return (
        <form className='flex flex-col gap-10' onSubmit={(e) => handleSaveClient(nombre, apellidos, numero)}>
            <fieldset className="flex flex-col gap-4" >
                <h2 className="text-3xl font-bold text-blue-600 uppercase" >Informacion del cliente</h2>
                <div className="flex gap-2" >
                    <div className='flex flex-col'>
                        <label htmlFor='nombre' className="text-2xl font-bold" >Nombre(s)</label>
                        <input 
                            type='text'
                            placeholder='Nombre(s) del cliente'
                            id='nombre'
                            className='border px-4 py-2 rounded-md mt-2 text-2xl'
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
                    
                    <div className='flex flex-col'>
                        <label htmlFor='apellidos' className="text-2xl font-bold">Apellido(s)</label>
                        <input 
                            type='text'
                            placeholder='Apellido(s) del cliente'
                            id='apellidos'
                            className='border px-4 py-2 rounded-md mt-2 text-2xl'
                            value={apellidos}
                            onChange={e => setApellidos(e.target.value)}
                        />
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <h2 className="text-3xl font-bold text-blue-600 uppercase">Informacion de contacto</h2>
                <div className='flex flex-col'>
                    <label htmlFor='apellidos' className="text-2xl font-bold">Numero</label>
                    <input 
                        type='number'
                        placeholder='Numero del cliente'
                        id='numero'
                        className='border px-4 py-2 rounded-md mt-2 text-2xl'
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                    />
                </div>
            </fieldset>

            <div className='flex items-center h-full justify-center'>
                <button 
                    type='submit' 
                    className={`${comprobarInfo() ? 'bg-indigo-100 text-indigo-500' : 'bg-amber-500 text-white hover:bg-amber-600'} text-3xl  rounded-xl py-3 mx-5 font-bold h-20 w-full`}
                    disabled={comprobarInfo()}
                >
                    Agregar Cliente
                </button> 
            </div> 
        </form>
    )
}

export default FormularioClientes
