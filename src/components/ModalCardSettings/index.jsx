import React,{useState,useEffect} from 'react'
import {ModalCardSettingsStyle} from 'components/ModalCardSettings/styles'
import TrashIcon from 'assets/svg/lixeira.svg'
import Modal from 'components/Modal'
import { LinksUrls } from 'services/api/link'
import CopyLinkIcon from 'assets/svg/copy-link.svg'
import { toast } from "react-toastify";
const ModalCardSettings = ({handlerClipBoard, openModalRemoveLink, id, link}) => {

    const linkService = new LinksUrls()

    const [openModal, setOpenModal] = useState(false);


    const handlerRemoveLink = async (e) =>{
        try{
        
            const result = await linkService.unregister(id)
            toast.success('link deletado com sucesso!')
        

        }catch(err){
            toast.error('erro ao tentar deletar link')
            
            console.log(err)
        }
    }

 
    return (

    <ModalCardSettingsStyle>
        <p onClick={(e)=> handlerRemoveLink(e)}><img src={TrashIcon} alt="lixeira" className='trash-icon' onClick={()=> handlerRemoveLink}/> Remover </p>
        <p><img src={CopyLinkIcon} alt="copiar link" className='trash-icon'/> Copiar Link</p>
    </ModalCardSettingsStyle>

   
  )
}

export default ModalCardSettings