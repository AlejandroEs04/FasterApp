'use client'
import Image from 'next/image'
import useFaster from '../hooks/useFaster'

export default function Home() {

  const { handleSaveItem, setImagen } = useFaster()

  return (
    <main className=''>
      <form
        onSubmit={handleSaveItem}
      >
        <input type='file' onChange={e => setImagen(e.target.files[0])} />

        <button
          type='submit'
        >Enviar</button>
      </form>
    </main>
  )
}
