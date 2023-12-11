'use client'
import useAdmin from '../../../hooks/useAdmin'

const ClientesPage = () => {
    const { handleChangeModal } = useAdmin();

    return (
        <div className='contenedor'>
        <h2 className="text-4xl font-bold text-blue-950">Clientes</h2>

        <div className="mt-4" >
            <button className="flex w-full justify-center md:justify-start items-center gap-4" onClick={() => handleChangeModal('clientes')}>
            <p className="text-3xl">Agregar Cliente</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </button>
        </div>
        </div>
    )
}

export default ClientesPage
