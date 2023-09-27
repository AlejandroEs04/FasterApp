'use client'

import useFaster from "../hooks/useFaster"

const FormularioDireccion = () => {
    const { handleChangeForm, setCalleNumero } = useFaster()

  return (
    <>
        <button  
            type="button"
            className="text-2xl text-start text-gray-400 hover:text-gray-700"
            onClick={handleChangeForm}
        >- No Agregar Direccion</button>

        <div className="flex flex-col text-start gap-2">
            <label htmlFor="calleNumero" className="text-3xl font-bold text-blue-900">Calle y Numero</label>
            <input 
                type="text" 
                placeholder="Ej. Buganbilias 2290" 
                className="border px-2 py-1 rounded-md w-full text-3xl"
                id="calleNumero"
            />
        </div>

        <div className="flex flex-col text-start gap-2">
            <label htmlFor="colonia" className="text-3xl font-bold text-blue-900">Colonia</label>
            <input 
                type="text" 
                placeholder="Colonia" 
                className="border px-2 py-1 rounded-md w-full text-3xl"
                id="colonia"
            />
        </div>

        <div className="flex flex-col text-start gap-2">
            <label htmlFor="codigoPostal" className="text-3xl font-bold text-blue-900">C.P.</label>
            <input 
                type="number" 
                placeholder="Codigo Postal" 
                className="border px-2 py-1 rounded-md w-full text-3xl"
                id="codigoPostal"
            />
        </div>

        <div className="flex gap-5">
            <div className="flex flex-col text-start gap-2">
                <label htmlFor="codigoPostal" className="text-3xl font-bold text-blue-900">Ciudad</label>
                <input 
                    type="text" 
                    placeholder="Codigo Postal" 
                    className="border px-2 py-1 rounded-md w-full text-3xl"
                    id="codigoPostal"
                    disabled
                />
            </div>

            <div className="flex flex-col text-start gap-2">
                <label htmlFor="codigoPostal" className="text-3xl font-bold text-blue-900">Estado</label>
                <input 
                    type="text" 
                    placeholder="Codigo Postal" 
                    className="border px-2 py-1 rounded-md w-full text-3xl"
                    id="codigoPostal"
                    disabled
                />
            </div>
        </div>
    </>
  )
}

export default FormularioDireccion
