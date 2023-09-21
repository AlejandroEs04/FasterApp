'use client'
import Image from 'next/image'
import useFaster from '../hooks/useFaster'
import ClienteListadoCategorias from '../components/ClienteListadoCategorias'

export default function Home() {

  const { handleSaveItem, setImagen } = useFaster()

  return (
    <main className=''>
        <ClienteListadoCategorias />
    </main>
  )
}
