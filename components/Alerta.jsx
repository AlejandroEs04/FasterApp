import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <div className='px-5 py-2 bg-red-500 font-bold text-white rounded-xl'>
        <p>{alerta}</p>
    </div>
  )
}

export default Alerta