import Image from "next/image"
import Link from "next/link"
import ddcodelogo from '../public/img/ddcodeLogo.svg'
import logo from '../public/img/Fondo-LB.webp'

const Footer = () => {
  return (
    <div className='bg-blue-950 contenedor grid grid-cols-2 gap-10'>
      <div className='flex flex-col items-start gap-10'>
        <div className="flex flex-col items-start">
            <Link href={'/'}>
                <Image src={logo} width={100} height={50} alt="logo de faster" className="h-auto w-72" />
            </Link>
        </div>

        <div className="flex flex-col items-start invert">
            <p className="text-xl">Desarrollado por:</p>
            <Link href={'https://www.ddcode.com'}>
                <Image src={ddcodelogo} width={50} height={25} alt="logo DD-code" className="w-36" />
            </Link>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-end">
        <nav className="flex flex-col gap-2 items-end">
            <Link href={'/'} className="text-2xl text-white font-medium hover:text-amber-500">Inicio</Link>  
            <Link href={'/productos'} className="text-2xl text-white font-medium hover:text-amber-500">Productos</Link>  
            <Link href={'/categorias'} className="text-2xl text-white font-medium hover:text-amber-500">Categorias</Link>  
        </nav>

        <nav className="flex flex-col gap-2 items-end">
            <Link href={'/login'} className="text-2xl text-white font-medium hover:text-amber-500">Iniciar sesion</Link> 
            <Link href={'/cuenta'} className="text-2xl text-white font-medium hover:text-amber-500">Cuenta</Link> 
            <Link href={'/carrito'} className="text-2xl text-white font-medium hover:text-amber-500">Carrito</Link> 
        </nav>
      </div>
    </div>
  )
}

export default Footer
