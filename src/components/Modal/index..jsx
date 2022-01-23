import React, { Children } from 'react'
import Logo from 'utils/links-logos'

import { ModalArea } from './styles'

const Modal = ({ showModal, setShowModal, children }) => {
    const handlerCloseModal = (e) => setShowModal(false);


    return (
        <> {showModal ? <ModalArea>
            < div className="col-6 offset-md-3  h-75  shadow p-5 position-relative bg-white" >
                {children}
            </div >
        </ModalArea> : null}</>
    )
}

export default Modal
