'use client'
import { useEffect, useState } from "react"
import useFaster from "../hooks/useFaster"
import FormularioDireccion from './FormularioDireccion'

const DireccionContainer = ({direccion}) => {

    return (
        <div className='bg-white rounded-md mt-5 p-10'>
            {direccion?.calleNumero === '' && direccion?.colonia === '' ? (
                <FormularioDireccion 
                    btn={true}
                />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 items-start text-start gap-5">
                        <div>
                            <p className="text-xl text-gray-400">Calle y Numero</p>
                            <p className="text-blue-900 font-bold">{direccion?.calleNumero}</p>
                        </div>

                        <div>
                            <p className="text-xl text-gray-400">Codigo Postal</p>
                            <p className="text-blue-900 font-bold">{direccion?.codigoPostal}</p>
                        </div>

                        <div>
                            <p className="text-xl text-gray-400">Colonia</p>
                            <p className="text-blue-900 font-bold">{direccion?.colonia}</p>
                        </div>
                    
                    <div className="flex gap-x-10 gap-y-2 flex-wrap">
                        <div>
                            <p className="text-xl text-gray-400">Ciudad</p>
                            <p className="text-blue-900 font-bold">{direccion?.ciudad}</p>
                        </div>

                        <div>
                            <p className="text-xl text-gray-400">Estado</p>
                            <p className="text-blue-900 font-bold">{direccion?.estado}</p>
                        </div>

                        <div>
                            <p className="text-xl text-gray-400">Pais</p>
                            <p className="text-blue-900 font-bold">Mexico</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DireccionContainer
