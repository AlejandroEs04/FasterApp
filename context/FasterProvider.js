'use client'
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify"
import generarId from "../helpers/generarId";

const FasterContext = createContext()

const FasterProvider = ({children}) => {
    const [categorias, setCategorias] = useState(null)
    const [productos, setProductos] = useState(null)
    const [sideBarContainer, setSideBarContainer] = useState(false)
    const [form, setForm] = useState(false)
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

    const getCategorias = async() => {
        const { data } = await axios(`/api/categorias`)
        setCategorias(data.categorias)
    }

    const getProductos = async() => {
        const { data } = await axios(`/api/productos`)
        setProductos(data.productos)
    }

    const getDireccion = async() => {
        try {
            const { data } = await axios(`/api/user/${await session?.user?.id}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategorias()
        getProductos()
    }, [])

    const handleCreateAccount = async() => {
        try {
            const res = await axios.post(`/api/user`, {
                nombre,
                apellido, 
                correo,
                password, 
                numero,
                token: generarId()
            });

            if(res) {
                toast.success(res.msg);
                router.push('/');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeSideBar = () => {
        setSideBarContainer(!sideBarContainer)
    }

    const handleChangeForm = () => {
        setForm(!form)
    }

    const handleAgregarCarrito = async({categoriaId, descripcion, inventario, iva, costo, proveedorId, nombre, imagen, ...producto}, cantidad) => {
        const productoCarrito = {
            ...producto,
            cantidad: cantidad
        }

        try {
            const carrito = await axios(`/api/user/${await session.user.id}/carrito`)
            const carritoArray = await carrito.data.carrito

            const productoRepetido = await carritoArray?.filter(producto => producto.productoId === productoCarrito.id)

            if(productoRepetido.length > 0) {
                const res = await axios.put(`/api/user/${await session.user.id}/carrito`, {
                    data: {
                        idCarrito: productoRepetido[0].id,
                        cantidad: productoCarrito.cantidad
                    }
                })

                if(res) {
                    toast.success("Producto Actualizado")
                }
                
            } else {
                const res = await axios.post(`/api/user/${await session.user.id}/carrito`, {
                    data: {
                        productoCarrito
                    }
                })

                if(res) {
                    toast.success("Producto Agregado Al Carrito")
                }
            }
        } catch (err) {
            toast.error("Necesitas iniciar sesion para guardar en el carrito")

            setTimeout(() => {
                signIn()
            }, 1500)
            
        }
    }

    const addDireccion = async() => {
        try {
            const userId = await session?.user?.id

            const direccion = {
                calleNumero,
                colonia,
                CP,
                ciudad, 
                estado
            }

            const res = await axios.put(`/api/user/${userId}/direccion`, {
                data: {
                    direccion
                }
            })

            console.log(res)
        } catch (error) {
            console.log(error)
        }
        
    }

    const getCarrito = async() => {
        const userId = await session?.user?.id

        /**if(session) {**/
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
        /**} else {
            router.push('/')
        }*/
        
    }

    const actualizarProductoCarrito = async({cantidadOProductos, ...producto}, cantidadAct) => {

        const productoActualizado = {
            ...producto,
            cantidadOProductos: cantidadAct
        }

        try {
            const pedidoActualizado = carrito.map(productoCarrito => producto.productoId === productoCarrito.productoId ? productoActualizado : productoCarrito )
            setCarrito(pedidoActualizado)
            const res = await axios.put(`/api/user/${await session.user.id}/carrito`, {
                data: {
                    idCarrito: producto.id,
                    cantidad: cantidadAct
                }
            })

            if(res) {
                toast.success("Producto Actualizado")
            }
        } catch (err) {
            console.log(err)
        }
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
                estado, 
                ciudad,
                setCiudad,
                setEstado,
                handleAgregarCarrito,
                getCarrito,
                actualizarProductoCarrito,
                carrito,
                getDireccion,
                addDireccion
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

