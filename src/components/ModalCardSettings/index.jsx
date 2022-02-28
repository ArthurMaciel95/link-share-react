import React,{useState,useEffect} from 'react'
import {ModalCardSettingsStyle} from 'components/ModalCardSettings/styles'
import TrashIcon from 'assets/svg/lixeira.svg'
import Modal from 'components/Modal'
import { LinksUrls } from 'services/api/link'
import CopyLinkIcon from 'assets/svg/copy-link.svg'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
const ModalCardSettings = ({ openModalRemoveLink, id, link, visitor}) => {
    const navigate = new useNavigate()
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

    const handlerClipBoard = () => {
        navigator.clipboard.writeText(link)
        toast.success('link copiado com sucesso!')
    }

 
    return (

    <ModalCardSettingsStyle>
       {!visitor &&  <p onClick={(e)=> handlerRemoveLink(e)}><img src={TrashIcon} alt="lixeira" className='trash-icon' onClick={()=> handlerRemoveLink}/> Remover </p>}
        <p onClick={(e)=> handlerClipBoard(e)}><img src={CopyLinkIcon} alt="copiar link" className='trash-icon'/> Copiar Link</p>
    </ModalCardSettingsStyle>

   
  )
}

export default ModalCardSettings