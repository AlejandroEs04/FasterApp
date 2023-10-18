import Link from "next/link"

const UsuarioPage = () => {
  return (
    <div className='contenedorUser'>
      <h1 className='font-bold text-blue-900 text-5xl text-start'>Cuenta</h1>

      <div className='grid grid-cols-3 gap-10 mt-5 text-start'>
        <Link href={'/usuario/pedidos'} className='bg-white rounded-md p-5 flex gap-5 items-center shadow-sm hover:bg-gray-200 hover:shadow-md'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </div>
            <div>
                <h3 className='font-bold text-3xl'>Tus pedidos</h3>
                <p className='text-2xl text-blue-900'>Rastrear paquetes, devoluciones o comprar algo de nuevo</p>
            </div>
            
        </Link>

        <Link href={'/usuario/info#seguridad'} className='bg-white rounded-md p-5 flex gap-5 items-center shadow-sm hover:bg-gray-200 hover:shadow-md'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            </div>

            <div>
                <h3 className='font-bold text-3xl'>Inicio de sesion y seguridad</h3>
                <p className='text-2xl text-blue-900'>Cambia tu correo electronico, contrasena y numero de telefono movil</p>
            </div>
        </Link>

        <Link href={'/usuario/info#direccion'} className='bg-white rounded-md p-5 flex gap-5 items-center shadow-sm hover:bg-gray-200 hover:shadow-md'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
            </div>

            <div>
                <h3 className='font-bold text-3xl'>Direccion</h3>
                <p className='text-2xl text-blue-900'>Mira y actualiza tu direccion o instrucciones de entregas</p>
            </div>
        </Link>
      </div>
    </div>
  )
}

export default UsuarioPage
