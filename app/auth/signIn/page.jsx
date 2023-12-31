'use client'
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import useFaster from "../../../hooks/useFaster"
import Alerta from "../../../components/Alerta"

const LogInPage = ({searchParams}) => {
  const [alerta, setAlerta] = useState();
  const {handleLogIn} = useFaster()
  const correo = useRef("")
  const pass = useRef("")

  useEffect(() => {
    if(searchParams.error) {
      setAlerta("Credenciales Incorrectas")
    }

    setTimeout(() => {
      setAlerta(null)
    }, 15000)
  },[])

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10 text-center my-20 mx-5 bg-white px-10 py-10 rounded-2xl">
        <div>
          <h2 className="font-bold text-4xl text-blue-900 uppercase">Iniciar Sesion</h2>
          <p className="text-3xl mt-5">Ingresa tus datos para iniciar sesion</p>
        </div>

        {alerta && (
          <Alerta 
            alerta={alerta}
          />
        )}

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
              handleLogIn(e, pass, correo)
            }
            className="px-5 py-2 bg-blue-700 text-white font-bold rounded-lg mt-10 hover:bg-blue-800"
          >
            Iniciar Sesion
          </button>
        </form>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 text-start">
            <p className="text-2xl">¿Aun no tienes cuenta?</p>
            <Link href={'/auth/signUp'} className="text-2xl font-bold text-amber-500 hover:text-amber-600" >Crear cuenta</Link>
          </div>

          <div className="flex flex-col gap-2 text-start">
            <p className="text-2xl">¿Olvidaste tu contrasena?</p>
            <Link href={'/auth/recovery-password'} className="text-2xl font-bold text-amber-500 hover:text-amber-600" >Recuperar contrasena</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogInPage
