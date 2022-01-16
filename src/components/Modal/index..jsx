import React from 'react'
import Logo from '../../utils/links-logos'
import ArrowLeftIcon from '../../assets/images/icon_arrow_left.png'
import LinkArea from '../../components/LinkArea'

const Modal = ({ showModal, setShowModal }) => {

    const handlerCloseModal = (e) => {
        setShowModal(false)

    }
    return (
        <> {showModal ? <section className='container-fluid  bg-opacity-25 bg-black position-absolute h-100 d-flex align-items-center '>
            < div className="col-6 offset-md-3 bg-white h-75 rounded shadow p-5 position-relative" >
                <img src={ArrowLeftIcon} alt="seta para esquerda" style={{ height: '60px', width: '60px' }} className='p-2  position-absolute top-0 ' onClick={e => handlerCloseModal(e)} />
                <input type="text" placeholder='digite o link ' className='p-2' />
                <div class="row h-25">
                    <LinkArea name="Facebook" logo={Logo.facebook}></LinkArea>
                    <LinkArea name="Instagram" logo={Logo.instagram}></LinkArea>
                    <LinkArea name="Discord" logo={Logo.discord}></LinkArea>
                </div>
                <div class="row h-25">
                    <LinkArea name="DropBox" logo={Logo.dropBox}></LinkArea>
                    <LinkArea name="Snapchat" logo={Logo.snapchat}></LinkArea>
                    <LinkArea name="Vimeo" logo={Logo.vimeo}></LinkArea>
                </div>
                <div class="row h-25">
                    <LinkArea name="Telegram" logo={Logo.telegram}></LinkArea>
                    <LinkArea name="TikTok" logo={Logo.tiktok}></LinkArea>
                    <LinkArea name="Youtube" logo={Logo.youtube}></LinkArea>

                </div>

            </div >
        </section > : null}</>
    )
}

export default Modal
