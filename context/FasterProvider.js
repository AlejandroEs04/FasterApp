'use client'
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify"


const FasterContext = createContext()

const FasterProvider = ({children}) => {
    const [categorias, setCategorias] = useState(null)
    const [productos, setProductos] = useState(null)
    const [sideBarContainer, setSideBarContainer] = useState(false)
    const [form, setForm] = useState(false)
    const [user, setUser] = useState({})
    const [carrito, setCarrito] = useState([])

    // Crear Cuenta
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [numero, setNumero] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')

    const [calleNumero, setCalleNumero] = useState('')
    const [colonia, setColonia] = useState('')
    const [CP, setCP] = useState(null)
    const [ciudad, setCiudad] = useState('')
    const [estado, setEstado] = useState('')

    const { data: session } = useSession()
    const router = useRouter()

    const obtenerCategorias = async() => {
        const { data } = await axios(`http://localhost:3000/api/categorias`)
        setCategorias(data.categorias)
    }

    const obtenerProductos = async() => {
        const { data } = await axios(`http://localhost:3000/api/productos`)
        setProductos(data.productos)
    }

    useEffect(() => {
        obtenerCategorias()
        obtenerProductos()
    }, [])

    const handleCreateAccount = () => {
        console.log("creando...")
    }

    const handleChangeSideBar = () => {
        setSideBarContainer(!sideBarContainer)
    }

    const handleChangeForm = () => {
        setForm(!form)
    }

    const handleAgregarCarrito = async({categoriaId, descripcion, inventario, iva, costo, proveedorId, ...producto}, cantidad) => {
        const productoCarrito = {
            ...producto,
            cantidad: cantidad
        }

        try {
            const res = await axios.post(`/api/user/${await session.user.id}/carrito`, {
                data: {
                    productoCarrito
                }
            })

            toast.success("Producto Agregado Al Carrito")
        } catch (err) {
            toast.error("Necesitas iniciar sesion para guardar en el carrito")

            setTimeout(() => {
                signIn()
            }, 1500)
            
        }
    }

    const getCarrito = async() => {
        if(session) {
            try {
                const { data } = await axios(`/api/user/${await session.user.id}/carrito`)

                const productosCarrito = [
                    data.carrito.map(productoCarrito => {
                        const productoFiltro = productos.filter(producto => producto.id === productoCarrito.productoId)

                        const productoCarritoAct = {
                            ...productoCarrito,
                            productoNombre: productoFiltro[0].nombre,
                            productoImg: productoFiltro[0].imagen,
                            productoPrecio: productoFiltro[0].precio,
                            inventario: productoFiltro[0].inventario,
                        }

                        return productoCarritoAct
                    })
                ]

                setCarrito(productosCarrito[0])
            } catch (err) {
                console.log(err)
            }
        } else {
            router.push('/')
        }
        
    }

    const actualizarProducto = () => {

    }

    return (
        <FasterContext.Provider
            value={{
                categorias,
                productos,
                sideBarContainer,
                handleChangeSideBar,
                handleChangeForm,
                setNombre,
                setApellido,
                setNumero,
                setCorreo,
                setPassword,
                form,
                handleCreateAccount,
                nombre, 
                apellido, 
                numero, 
                correo,
                password,
                calleNumero, 
                colonia,
                CP,
                setCalleNumero, 
                setColonia,
                setCP,
                setCiudad,
                setEstado,
                handleAgregarCarrito,
                getCarrito,
                actualizarProducto,
                carrito
            }}
        >
            {children}
        </FasterContext.Provider>
    )
}

export {
    FasterProvider
}

export default FasterContext

