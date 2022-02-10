import React, { Children } from 'react'


import { ModalArea } from './styles'

const Modal = ({ showModal, setShowModal, children }) => {



    return (
        <> {showModal ? <ModalArea>
            < div className="col-6 offset-md-3  shadow p-5 position-relative bg-white" >
                {children}
            </div >
        </ModalArea> : null}</>
    )
}

export default Modal
