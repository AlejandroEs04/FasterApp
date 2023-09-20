'use client'
import { useEffect, useCallback } from 'react'
import useAdmin from '../hooks/useAdmin'

const FormularioProveedores = () => {

    const { nombre, setNombre, handleSaveItem } = useAdmin()

    const comprobarInfo = useCallback(() => {
        return nombre === '' || nombre.length < 3
    }, [nombre])

    useEffect(() => {
        comprobarInfo()
    }, [nombre])

  return (
    <form className='flex flex-col gap-5' onSubmit={handleSaveItem}>
            <div className="flex flex-col">
                <label htmlFor="nombre">Nombre de proveedor</label>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    id="nombre" 
                    className="border px-4 py-2 rounded-md mt-2 text-3xl"   
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}  
                />
            </div>

            <button 
                type='submit' 
                className={`${comprobarInfo() ? 'bg-indigo-100 text-indigo-500' : 'bg-amber-500 text-white hover:bg-amber-600'} text-3xl  rounded-xl py-3 mx-5  font-bold `}
                disabled={comprobarInfo()}
            >
                Guardar
            </button>   
        </form>
  )
}

export default FormularioProveedores
