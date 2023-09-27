'use client'
import Modal from 'react-modal'
import useAdmin from '../hooks/useAdmin';
import Loading from './Loading';
import FormularioCategoria from './FormularioCategoria'
import FormularioProductos from './FormularioProductos';
import FormularioProveedores from './FormularioProveedores'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root')

const ModalContenedor = () => {
    const { modal, handleChangeModal, loading, tipo, setImagen, setNombre } = useAdmin()

    return (
        <Modal isOpen={modal} style={customStyles}>
            <div className="flex justify-end">
                <button onClick={() => [
                    handleChangeModal(),
                    setNombre(''),
                    setImagen(null)
                ]}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            {tipo === 'categorias' && <FormularioCategoria />}
            {tipo === 'productos' && <FormularioProductos />}
            {tipo === 'proveedores' && <FormularioProveedores />}
            {loading && <Loading />}
        </Modal>
    )
}

export default ModalContenedor
