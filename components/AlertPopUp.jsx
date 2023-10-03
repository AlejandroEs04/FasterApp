'use client'
import Modal from 'react-modal'
import useAdmin from '../hooks/useAdmin';

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

const AlertPopUp = () => {
    const { alertModal, handleChangeAlert, handleDeleteItem } = useAdmin()

    return (
        <Modal isOpen={alertModal} style={customStyles}>
            <form className='flex flex-col items-center gap-5' onSubmit={e => handleDeleteItem(e)}>
                <p className='font-bold'>¿Seguro que quieres eliminarlo?</p>
                <div className='flex gap-10'>
                    <button type='submit' className='px-5 py-1 rounded-md bg-red-600 text-white font-bold hover:bg-red-700'>
                        Eliminar
                    </button>

                    <button className='px-5 py-1 rounded-md bg-indigo-600 text-white font-bold hover:bg-indigo-700' onClick={handleChangeAlert}>
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default AlertPopUp
