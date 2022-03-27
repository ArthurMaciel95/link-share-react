import React, { useState, useEffect } from 'react'
import { ModalCardSettingsStyle } from 'components/modal-card-settings/styles'
import TrashIcon from 'assets/svg/lixeira.svg'
import Modal from 'components/modal'
import { LinksUrls } from 'services/api/link'
import CopyLinkIcon from 'assets/svg/copy-link.svg'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
const ModalCardSettings = ({ openModalRemoveLink, id, link, visitor }) => {
    const navigate = new useNavigate()
    const linkService = new LinksUrls()

    const [openModal, setOpenModal] = useState(false);


    const handlerRemoveLink = async (e) => {
        try {

            const result = await linkService.unregister(id)
            toast.success('link deleted successfully!')



        } catch (err) {
            toast.error('error trying to delete link')

            console.log(err)
        }
    }

    const handlerClipBoard = () => {
        navigator.clipboard.writeText(link)
        toast.success('link successfully copied!')
    }


    return (

        <ModalCardSettingsStyle>
            {!visitor && <p onClick={(e) => handlerRemoveLink(e)}><img src={TrashIcon} alt="lixeira" className='trash-icon' onClick={() => handlerRemoveLink} /> Remove </p>}
            <p onClick={(e) => handlerClipBoard(e)}><img src={CopyLinkIcon} alt="copy link" className='trash-icon' /> Copy Link</p>
        </ModalCardSettingsStyle>


    )
}

export default ModalCardSettings