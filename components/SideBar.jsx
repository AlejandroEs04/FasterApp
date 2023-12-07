'use client'
import Link from "next/link"
import { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import useFaster from "../hooks/useFaster"
import AuthNav from "./AuthNav"
import { usePathname } from "next/navigation"

const SideBar = () => {
    const [admin, setAdmin] = useState(false);
    const { sideBarContainer, handleChangeSideBar } = useFaster()

    const path = usePathname();

    useEffect(() => {
        if(path === "/admin" || path === "/admin/productos" || path === "/admin/categorias" || path === "/admin/compras") {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }, []);

  return (
    <div className="z-50">
    <Sidebar
        collapsed={sideBarContainer}
        width="0"
        collapsedWidth="270px"
        rootStyles={{
            position: "fixed",
            height: "100%",
            zIndex: 10
        }}
        backgroundColor="#11234d"
    >
        <div className="flex flex-col mx-10 py-10 text-white h-full justify-between">
            <div>
                <div className="flex justify-end">
                    <button onClick={handleChangeSideBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            
                <nav className="flex flex-col items-end mt-5 gap-5">
                    
                    {admin ? (
                        <>
                            <Link href={'/admin'} onClick={handleChangeSideBar} className="text-white px-2 py-1 hover:bg-amber-300 hover:text-black">Inicio</Link>
                            <Link href={'/admin/productos'} onClick={handleChangeSideBar} className="text-white px-2 py-1 hover:bg-amber-300 hover:text-black">Productos</Link>
                            <Link href={'/admin/categorias'} onClick={handleChangeSideBar} className="text-white px-2 py-1 hover:bg-amber-300 hover:text-black">Categorias</Link>
                            <Link href={'/admin/compras'} onClick={handleChangeSideBar} className="text-white px-2 py-1 hover:bg-amber-300 hover:text-black">Categorias</Link>
                        </>
                    ) : (
                        <>
                            <Link href={'/'} onClick={handleChangeSideBar} className="text-white px-2 py-1 hover:bg-amber-300 hover:text-black">Inicio</Link>
                            <Link href={'/productos'} onClick={handleChangeSideBar} className="text-white px-2 py-1 hover:bg-amber-300 hover:text-black">Productos</Link>
                        </>
                    )}
                </nav>
            </div>

            <nav className="flex flex-col items-end pb-20 gap-5">
                <AuthNav />
            </nav>
        </div>
    </Sidebar>
    </div>
  )
}

export default SideBar
