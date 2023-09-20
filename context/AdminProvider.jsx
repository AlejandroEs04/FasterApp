'use client'
import axios from "axios"
import { toast } from "react-toastify"
import { createContext, useState, useEffect } from "react"

const AdminContext = createContext()

const AdminProvider = ({children}) => {
    const [productos, setProductos] = useState(null)
    const [proveedores, setProveedores] = useState(null)
    const [categorias, setCategorias] = useState(null)
    const [modal, setModal] = useState(false)
    const [imagen, setImagen] = useState(null)
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [costo, setCosto] = useState(0)
    const [descripcion, setDescripcion] = useState('')
    const [iva, setIva] = useState(0)
    const [categoriaId, setCategoriaId] = useState(null)
    const [proveedorId, setProveedorId] = useState(null)
    const [inventario, setInventario] = useState(0)
    const [alertModal, setAlertModal] = useState(false)
    const [tipo, setTipo] = useState('')
    const [elementoId, setElementoId] = useState(null)
    const [loading, setLoading] = useState(false)

    const obtenerCategorias = async () => {
        const { data } = await axios(`http://localhost:3000/api/categorias`)
        setCategorias(data.categorias)
    }

    const obtenerProductos = async () => {
        const { data } = await axios('http://localhost:3000/api/productos')
        setProductos(data.productos)
    }

    const obtenerProveedores = async () => {
        const { data } = await axios('http://localhost:3000/api/proveedores')
        setProveedores(data.proveedores)
    }

    useEffect(() => {
        obtenerCategorias()
        obtenerProductos()
        obtenerProveedores()
    }, [])

    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        obtenerCategorias()
    }, [])

    const handleChangeModal = (tipo, elementoId) => {
        setModal(!modal)
        setTipo(tipo)
        setElementoId(elementoId)
    }

    const handleChangeAlert = (tipo, elementoId) => {
        setAlertModal(!alertModal)
        setTipo(tipo)
        setElementoId(elementoId)
    }

    const uploadImage = async () => {
        const formData = new FormData()
        formData.append('file', imagen)

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })

        const data = await response.json()

        return data.url
    }

    const handleSaveItem = (e) => {
        e.preventDefault()
        if(elementoId) {
            console.log(elementoId)
            return
        } else {
            handleAddItem()
            return
        }
    }

    const handleAddItem = async () => {
        switch (tipo) {
            case 'productos':
                try {
                    setLoading(true)
                    const url = await uploadImage()
                    const precioNum = Number(precio)
                    const costoNum = Number(costo)
                    const ivaNum = Number(iva)
                    const categoriaIdNum = Number(categoriaId)
                    const proveedorIdNum = Number(proveedorId)
                    const inventarioNum = Number(inventario)

                    await axios.post('/api/productos', {nombre, precioNum, costoNum, url, descripcion, ivaNum, categoriaIdNum, proveedorIdNum, inventarioNum})

                    setNombre('')
                    setPrecio(0)
                    setCosto(0)
                    setIva(0)
                    setImagen(null)
                    setDescripcion('')
                    setCategoriaId(null)
                    setProveedorId(null)
                    setInventario(0)
                    setLoading(false)
                    toast.success("Producto Creado Correctamente")

                    setTimeout(() => {
                        setModal(false)
                    }, 500)
                } catch (error) {
                    
                }
                break;

            case 'categorias':
                try {
                    setLoading(true)
                    const url = await uploadImage()

                    await axios.post('/api/categorias', {nombre, url})

                    setNombre('')
                    setImagen({})
                    setLoading(false)
                    toast.success("Categoria Agregada Correctamente")

                    setTimeout(() => {
                        setModal(false)
                    }, 500)
                } catch (err) {
                    console.log(err)
                }
                break;

            case 'proveedores':
                try {
                    setLoading(true)

                    await axios.post('/api/proveedores', {nombre})

                    setNombre('')
                    setLoading(false)
                    toast.success("Proveedor Agregado Correctamente")

                    setTimeout(() => {
                        setModal(false)
                    }, 500)
                } catch (err) {
                    console.log(err)
                }
                break;

            default:
                break;
        }
    }

    const handleUpdateItem = async () => {

    }

    const handleDeleteItem = async () => {
        switch (tipo) {
            case 'productos':
                console.log(id)
                break;
            
            case 'categorias':
                try {
                    await axios.delete('/api/categorias', {
                        data: {
                            elementoId
                        }
                    })

                    setTipo('')
                    setElementoId(null)

                    toast.error("Categoria Eliminada Correctamente")

                    setTimeout(() => {
                        setAlertModal(false)
                    }, 500)
                } catch (err) {
                    console.log(err)
                }
                break;
            
            case 'proveedores':
                console.log(id)
                break;

            default:
                break;
        }
    }

    return (
        <AdminContext.Provider
            value={{
                categorias,
                productos,
                proveedores,
                handleChangeModal,
                modal,
                setImagen,
                nombre,
                setNombre,
                handleDeleteItem,
                alertModal,
                handleChangeAlert,
                tipo,
                elementoId,
                imagen,
                handleSaveItem,
                loading,
                setPrecio,
                precio,
                setCosto,
                costo,
                setDescripcion,
                descripcion,
                setIva,
                iva,
                setCategoriaId,
                categoriaId,
                setProveedorId,
                proveedorId,
                setInventario,
                inventario
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export {
    AdminProvider
}

export default AdminContext