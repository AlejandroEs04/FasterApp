import styles from '../styles/header.module.css'
import Image from 'next/image'
import logo from '../public/img/Fondo-LB.webp'
import Link from 'next/link'

function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <div className='flex items-center gap-16'>
                    <Image src={logo} width={250} alt='Logo Faster'/>
                    <nav>
                        <Link href={'/'} >Inicio</Link>
                        <Link href={'/productos'} >Productos</Link>
                    </nav>
                </div>
                
                <nav>
                    <Link href={'/login'} >Iniciar Sesion</Link>
                    <Link href={'/cuenta'} >Cuenta</Link>
                    <Link href={''} >Carrito</Link>
                </nav>                
            </div>
        </div>
    )
}

export default Header
