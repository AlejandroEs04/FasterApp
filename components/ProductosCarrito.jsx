import ProductoCarrito from './ProductoCarrito'

const ProductosCarrito = ({carrito}) => {

    return (
        <div className='flex flex-col gap-5 items-start mt-5 bg-white p-5 rounded-xl'>
            {carrito.length > 0 ? carrito?.map(productoCarrito => (
                <ProductoCarrito 
                    key={productoCarrito.id}
                    producto={productoCarrito}
                />
            )) : (
                <p className='font-bold text-4xl text-amber-500 h-20 flex items-center'>Aun no hay productos en el carrito</p>
            )}
            
        </div>
    )
}

export default ProductosCarrito
