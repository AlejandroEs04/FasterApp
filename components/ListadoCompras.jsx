'use client'
import useAdmin from '../hooks/useAdmin'

const ListadoCompras = () => {
    const { compras } = useAdmin()

    console.log(compras)

    return (
        <div className='flex flex-col mt-10 bg-white py-5 px-10 rounded-3xl gap-5'>
            <table>
                <thead className='border-b'>
                    <tr>
                        <th className='py-2'>ID</th>
                        <th className='py-2'>ProductoID</th>
                        <th className='py-2'>Fecha</th>
                        <th className='py-2'>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {compras?.map(compra => (
                        <tr key={compra.id}>
                            <td className='font-normal py-2 border-r'>{compra.id}</td>
                            <td className='font-normal py-2 border-r'>{compra.productoId}</td>
                            <td className='font-normal py-2 border-r'>{compra.fecha}</td>
                            <td className='font-normal py-2 border-r'>{compra.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}

export default ListadoCompras
