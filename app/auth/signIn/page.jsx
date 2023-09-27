'use client'
import { useRef } from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"

const LogInPage = () => {

  const correo = useRef("")
  const pass = useRef("")

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      correo: correo.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/"
    })
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10 text-center my-20 mx-5 bg-white px-10 py-10 rounded-2xl">
        <div>
          <h2 className="font-bold text-4xl text-blue-900 uppercase">Iniciar Sesion</h2>
          <p className="text-3xl mt-5">Ingresa tus datos para iniciar sesion</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col text-start gap-2">
            <label htmlFor="correo" className="text-3xl font-bold text-blue-900">Correo</label>
            <input 
              type="email" 
              placeholder="Correo" 
              className="border-2 px-2 py-1 rounded-md w-full text-3xl"
              onChange={(e) => (correo.current = e.target.value)}
              id="correo"
            />
          </div>

          <div className="flex flex-col text-start gap-2">
            <label htmlFor="password" className="text-3xl font-bold text-blue-900">Contrasena</label>
            <input 
              type="password" 
              placeholder="Contrasena" 
              className="border px-2 py-1 rounded-md w-full text-3xl"
              onChange={(e) => (pass.current = e.target.value)}
              id="password"
            />
          </div>

          <button
            onClick={e => 
              onSubmit(e)
            }
            className="px-5 py-2 bg-blue-700 text-white font-bold rounded-lg mt-10 hover:bg-blue-800"
          >
            Iniciar Sesion
          </button>
        </form>

        <div className="flex flex-col gap-2 text-start">
          <p className="text-2xl">¿Aun no tienes cuenta?</p>
          <Link href={'/auth/signUp'} className="text-2xl font-bold text-amber-500 hover:text-amber-600" >Crear cuenta</Link>
        </div>
      </div>
    </div>
  )
}

export default LogInPage
