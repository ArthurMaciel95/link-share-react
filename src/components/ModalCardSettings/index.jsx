import React,{useState} from 'react'
import {ModalCardSettingsStyle} from 'components/ModalCardSettings/styles'
import TrashIcon from 'assets/svg/lixeira.svg'
import Modal from 'components/Modal'

import CopyLinkIcon from 'assets/svg/copy-link.svg'
const ModalCardSettings = ({handlerClipBoard, openModalRemoveLink, id}) => {



    const [openModal, setOpenModal] = useState(false);


    const handlerRemoveLink = () =>{
        return console.log(id)
    }

    return (
    <>
   {openModal &&  <Modal>
        ...
    </Modal>}
    <ModalCardSettingsStyle>
        <p><img src={TrashIcon} alt="lixeira" className='trash-icon' onClick={()=> handlerRemoveLink}/> Remover </p>
        <p><img src={CopyLinkIcon} alt="copiar link" className='trash-icon'/> Copiar Link</p>
    </ModalCardSettingsStyle>
    </>
  )
}

export default ModalCardSettings