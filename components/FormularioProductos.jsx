'use client'
import { useCallback, useEffect } from 'react'
import useAdmin from '../hooks/useAdmin'

const FormularioProductos = () => {

    const { 
        nombre, 
        setNombre, 
        imagen, 
        setImagen,
        handleSaveItem,
        setPrecio,
        precio,
        setCosto,
        costo,
        setDescripcion,
        descripcion,
        setIva,
        iva,
        proveedores,
        categorias,
        setInventario,
        inventario,
        setCategoriaId, 
        categoriaId,
        setProveedorId, 
        proveedorId
    } = useAdmin()

    const comprobarInfo = useCallback(() => {
        return imagen === null || nombre === '' || nombre.length < 3 || costo <= 0 || precio <= 0 || iva <= 0 || descripcion.length < 20 || descripcion === '' || inventario <= 0 || proveedorId <= 0 || categoriaId <= 0
    }, [nombre, imagen, costo, precio, iva, descripcion, inventario, proveedorId, categoriaId])

    useEffect(() => {
        comprobarInfo()
    }, [nombre, imagen, costo, precio, iva, descripcion, inventario, proveedorId, categoriaId])

    return (
        <form className='flex flex-col gap-5' onSubmit={handleSaveItem}>
            <div className='flex flex-col'>
                <label htmlFor='nombre'>Nombre del producto</label>
                <input 
                    type='text'
                    placeholder='Nombre del Producto'
                    id='nombre'
                    className='border px-4 py-2 rounded-md mt-2 text-3xl'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor='precio'>Precio del producto</label>
                    <div className='flex items-center gap-2'>
                        <p>$</p>
                        <input 
                            type='number'
                            placeholder='Precio del Producto'
                            id='precio'
                            className='border px-4 py-2 rounded-md mt-2 text-3xl'
                            value={precio}
                            onChange={e => setPrecio(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className='flex flex-col'>
                    <label htmlFor='costo'>Costo del producto</label>
                    <div className='flex items-center gap-2'>
                        <p>$</p>
                        <input 
                            type='number'
                            placeholder='Costo del Producto'
                            id='costo'
                            className='border px-4 py-2 rounded-md mt-2 text-3xl'
                            value={costo}
                            onChange={e => setCosto(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="imagen">Imagen</label>
                    <input 
                        type='file' 
                        id='imagen'
                        className="border px-4 py-2 rounded-md mt-2 text-2xl" 
                        onChange={e => setImagen(e.target.files[0])}
                    />
                </div>

                
                <div className='flex flex-col'>
                    <label htmlFor='iva'>Iva</label>
                    <div className='flex items-center gap-2'>
                        <input 
                            type='number'
                            placeholder='Iva'
                            id='iva'
                            className='border px-4 py-2 rounded-md mt-2 text-3xl'
                            value={iva}
                            onChange={e => setIva(e.target.value)}
                        />
                        <p>%</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea 
                    id='textarea'
                    onChange={e => setDescripcion(e.target.value)}
                    className='border px-4 py-2 rounded-md mt-2 text-2xl h-52'
                    value={descripcion}
                />
            </div>

            <div className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                        className='border px-4 py-2 rounded-md mt-2 text-3xl bg-white' id='categoria' 
                        onChange={e => setCategoriaId(e.target.value)}
                    >
                        <option value=''>-- SELECCIONE --</option>
                        {categorias?.map(categoria => (
                            <option 
                                value={categoria.id} 
                                key={categoria.id}
                            >{categoria.nombre}</option>
                        ))}
                    </select>
                </div>

                
                <div className='flex flex-col'>
                    <label htmlFor="proveedor">Proveedor</label>
                    <select 
                        className='border px-4 py-2 rounded-md mt-2 text-3xl bg-white'
                        onChange={e => setProveedorId(e.target.value)}
                    >
                        <option value=''>-- SELECCIONE --</option>
                        {proveedores?.map(proveedor => (
                            <option 
                                value={proveedor.id} 
                                key={proveedor.id}
                            >{proveedor.nombre}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="inventario">Inventario</label>
                    <input 
                        type='number' 
                        id='inventario'
                        className="border px-4 py-2 rounded-md mt-2 text-2xl" 
                        value={inventario}
                        onChange={e => setInventario(e.target.value)}
                    />
                </div>

                <div className='flex items-center h-full justify-center'>
                    <button 
                        type='submit' 
                        className={`${comprobarInfo() ? 'bg-indigo-100 text-indigo-500' : 'bg-amber-500 text-white hover:bg-amber-600'} text-3xl  rounded-xl py-3 mx-5 font-bold h-20 w-full`}
                        disabled={comprobarInfo()}
                    >
                        Guardar
                    </button> 
                </div> 
            </div>  
        </form>
    )
}

export default FormularioProductos
