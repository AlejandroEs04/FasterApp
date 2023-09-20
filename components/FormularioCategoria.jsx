'use client'
import { useEffect, useCallback } from 'react'
import useAdmin from '../hooks/useAdmin'

const FormularioCategoria = () => {

    const {setImagen, nombre, setNombre, handleSaveItem, imagen } = useAdmin()

    const comprobarInfo = useCallback(() => {
        return imagen === null || nombre === '' || nombre.length < 3
    }, [nombre, imagen])

    useEffect(() => {
        comprobarInfo()
    }, [nombre, imagen])

    return (
        <form className='flex flex-col gap-5' onSubmit={handleSaveItem}>
            <div className="flex flex-col">
                <label htmlFor="nombre">Nombre de categoria</label>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    id="nombre" 
                    className="border px-4 py-2 rounded-md mt-2 text-3xl"   
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}  
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="nombre">Icono</label>
                <input 
                    type='file' 
                    className="border px-4 py-2 rounded-md mt-2 text-2xl" 
                    onChange={e => setImagen(e.target.files[0])}
                />
            </div>

            <button 
                type='submit' 
                className={`${comprobarInfo() ? 'bg-indigo-100 text-indigo-500' : 'bg-amber-500 text-white hover:bg-amber-600'} text-3xl  rounded-xl py-3 mx-5  font-bold `}
            >
                Guardar
            </button>   
        </form>
    )
}

export default FormularioCategoria
