'use client'
import axios from "axios"
import { toast } from "react-toastify"
import { createContext, useState, useEffect } from "react"

const AdminContext = createContext()

const AdminProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState([])
    const [categorias, setCategorias] = useState(null)
    const [modal, setModal] = useState(false)
    const [imagen, setImagen] = useState(null)
    const [nombre, setNombre] = useState('')
    const [alertModal, setAlertModal] = useState(false)
    const [tipo, setTipo] = useState('')
    const [elementoId, setElementoId] = useState(null)
    const [loading, setLoading] = useState(false)

    const obtenerCategorias = async () => {
        const { data } = await axios('http://localhost:3000/api/categorias')
        setCategorias(data.categorias)
    }

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
                console.log('productos')
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
                console.log(id)
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
                loading
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