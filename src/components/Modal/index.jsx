import React, { Children } from 'react'
import Logo from '../../utils/links-logos'
import ArrowLeftIcon from '../../assets/images/icon_arrow_left.png'

import { ModalArea } from './styles'

const Modal = ({ showModal, setShowModal }) => {
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);


    return (
        <> {showModal ? <ModalArea>
            < div className="col-6 offset-md-3  shadow p-5 position-relative bg-white" >
                <img src={ArrowLeftIcon} alt="seta para esquerda" style={{ height: '60px', width: '60px' }} className='p-2  position-absolute top-0 ' onClick={e => handlerCloseModal(e)} />
                <div class="row h-25">
                    <LinkArea name="Facebook" logo={Logo.facebook}></LinkArea>
                    <LinkArea name="Instagram" logo={Logo.instagram}></LinkArea>
                    <LinkArea name="Discord" logo={Logo.discord}></LinkArea>
                    <LinkArea name="DropBox" logo={Logo.linkdin}></LinkArea>
                </div>
                <div class="row h-25">
                    <LinkArea name="DropBox" logo={Logo.twitter}></LinkArea>
                    <LinkArea name="Snapchat" logo={Logo.snapchat}></LinkArea>
                    <LinkArea name="Vimeo" logo={Logo.vimeo}></LinkArea>
                    <LinkArea name="DropBox" logo={Logo.pinterest}></LinkArea>
                </div>
                <div class="row h-25">
                    <LinkArea name="Telegram" logo={Logo.telegram}></LinkArea>
                    <LinkArea name="TikTok" logo={Logo.tiktok}></LinkArea>
                    <LinkArea name="Youtube" logo={Logo.youtube}></LinkArea>
                    <LinkArea name="DropBox" logo={Logo.soundcloud}></LinkArea>
                </div>
                <div class="row h-25">
                    <LinkArea name="Telegram" logo={Logo.twitch}></LinkArea>
                    <LinkArea name="TikTok" logo={Logo.dropBox}></LinkArea>
                    <LinkArea name="Youtube" logo={Logo.onlyfans}></LinkArea>
                    <LinkArea name="DropBox" logo={Logo.soundcloud}></LinkArea>
                </div>
            </div >
        </ModalArea> : null}</>
    )
}

export default Modal
