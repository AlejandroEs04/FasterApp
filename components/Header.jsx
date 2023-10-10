'use client'
import styles from '../styles/header.module.css'
import Image from 'next/image'
import logo from '../public/img/Fondo-LB.webp'
import Link from 'next/link'
import useFaster from '../hooks/useFaster'
import AuthNav from './AuthNav'


function Header() {
    const { handleChangeSideBar } = useFaster()

    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <div className='flex items-center gap-16'>
                    <Link href={'/'}>
                      <Image src={logo} width={100} height={50} alt='Logo Faster'/>
                    </Link>
                    
                    <div className='hidden md:flex'>
                        <nav>
                            <Link href={'/'} className="text-white text-3xl px-2 py-1 hover:bg-amber-300 hover:text-black">Inicio</Link>
                            <Link href={'/productos'} className="text-white text-3xl px-2 py-1 hover:bg-amber-300 hover:text-black">Productos</Link>
                        </nav>
                    </div>

                    <button
                        onClick={handleChangeSideBar}
                        className='flex md:hidden'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                
                <div className='hidden md:flex'>
                    <nav>
                        <AuthNav />
                    </nav>    
                </div>      
            </div>
        </div>
    )
}

export default Header
