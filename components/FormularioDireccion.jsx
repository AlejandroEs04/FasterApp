'use client'
import { useEffect, useState } from 'react'
import useFaster from "../hooks/useFaster"
import { estados } from "../prisma/data/estados"
import { ciudades } from "../prisma/data/ciudades"

const FormularioDireccion = ({btn = false}) => {
    const [ciudadesSelect, setCiudadesSelect] = useState(null)

    const { setCalleNumero, calleNumero, setColonia, colonia, CP, setCP, setCiudad, ciudad, setEstado, estado, addDireccion } = useFaster()

    useEffect(() => {
        const estadoSelect = ciudades.filter(ciudad => ciudad.id === estado)

        setCiudadesSelect(estadoSelect[0]?.ciudades)
    }, [estado])
    
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col text-start gap-2">
                <label htmlFor="calleNumero" className="text-3xl font-bold text-blue-900">Calle y Numero</label>
                <input 
                    type="text" 
                    placeholder="Ej. Buganbilias 2290" 
                    className="border px-2 py-1 rounded-md w-full text-3xl"
                    id="calleNumero"
                    value={calleNumero}
                    onChange={e => setCalleNumero(e.target.value)}
                />
            </div>

            <div className="flex flex-col text-start gap-2">
                <label htmlFor="colonia" className="text-3xl font-bold text-blue-900">Colonia</label>
                <input 
                    type="text" 
                    placeholder="Colonia" 
                    className="border px-2 py-1 rounded-md w-full text-3xl"
                    id="colonia"
                    value={colonia}
                    onChange={e => setColonia(e.target.value)}
                />
            </div>

            <div className="flex flex-col text-start gap-2">
                <label htmlFor="codigoPostal" className="text-3xl font-bold text-blue-900">C.P.</label>
                <input 
                    type="number" 
                    placeholder="Codigo Postal" 
                    className="border px-2 py-1 rounded-md w-full text-3xl"
                    id="codigoPostal"
                    value={CP}
                    onChange={e => setCP(e.target.value)}
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col text-start gap-2 w-full sm:w-1/2">
                    <label htmlFor="estado" className="text-3xl font-bold text-blue-900">Estado</label>
                    <select className="border px-2 py-1 rounded-md w-full text-3xl" id="estado" onChange={e => setEstado(e.target.value)}>
                        <option>Seleccione su estado</option>
                        {estados?.map(estado => (
                            <option key={estado.clave} value={estado.clave}>{estado.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col text-start gap-2 w-full sm:w-1/2">
                    <label htmlFor="ciudad" className="text-3xl font-bold text-blue-900">Ciudad</label>
                    <select className="border px-2 py-1 rounded-md w-full text-3xl" id="estado" onChange={e => setCiudad(e.target.value)} disabled={estado === ''}>
                        <option>Seleccione su ciudad</option>
                        {ciudadesSelect?.map(ciudad => (
                            <option key={ciudad} value={ciudad}>{ciudad}</option>
                        ))}
                    </select>
                </div>
            </div>

            {btn && (
                <button
                    className="px-5 py-2 bg-amber-500 rounded-xl text-white font-bold hover:bg-amber-600"
                    onClick={e => {
                        e.preventDefault()

                        addDireccion()
                    }}
                >
                    Guardar Direccion
                </button>
            )}
        </div>
    )
}

export default FormularioDireccion
