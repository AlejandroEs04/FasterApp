import React from 'react'

const RecoveryPasswordPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10 text-center my-20 mx-5 bg-white px-10 py-10 rounded-2xl">
        <div>
          <h2 className="font-bold text-4xl text-blue-900 uppercase">Recuperar contrasena</h2>
          <p className="text-3xl mt-5">Ingresa tu correo y enviaremos las instrucciones a tu correo registrado</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col text-start gap-2">
            <label htmlFor="correo" className="text-3xl font-bold text-blue-900">Correo</label>
            <input 
              type="email" 
              placeholder="Correo" 
              className="border-2 px-2 py-1 rounded-md w-full text-3xl"
              id="correo"
            />
          </div>

          <button
            className="px-5 py-2 bg-blue-700 text-white font-bold rounded-lg mt-10 hover:bg-blue-800"
          >
            Enviar
          </button>
        </form>

        
      </div>
    </div>
  )
}

export default RecoveryPasswordPage
