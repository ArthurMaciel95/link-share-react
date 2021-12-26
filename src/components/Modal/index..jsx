import React from 'react'
import Logo from '../../utils/links-logos'
import ArrowLeftIcon from '../../assets/images/icon_arrow_left.png'

const Modal = ({ showModal }) => {
    return (
        <>{showModal ? <section className='container-fluid  bg-opacity-25 bg-black position-absolute h-100 d-flex align-items-center position-relative'>
            <div className="col-6 offset-md-3 bg-white h-75 rounded shadow p-5">
                <img src={ArrowLeftIcon} alt="seta para esquerda" style={{ height: '60px', width: '60px' }} className='p-2 bg-black position-absolute' />
                <input type="text" placeholder='digite o link ' className='p-3' />
                <div class="row">

                    <div className="col d-flex justify-center align-items-center">
                        <img src={Logo.facebook} alt="facebook logo" />
                    </div>
                    <div className="col">
                        <img src={Logo.instagram} alt="instagram logo" />
                    </div>
                    <div className="col">    <img src={Logo.linkdin} alt="instagram logo" /></div>
                </div>
                <div class="row">
                    <div className="col">
                        <img src={Logo.snapshot} alt="instagram logo" />
                    </div>
                    <div className="col">
                        <img src={Logo.youtube} alt="instagram logo" />
                    </div>
                    <div className="col">    <img src={Logo.telegram} alt="instagram logo" /></div>
                </div>
                <div class="row">
                    <div className="col">
                        <img src={Logo.twitter} alt="instagram logo" />
                    </div>
                    <div className="col">
                        <img src={Logo.discord} alt="instagram logo" />
                    </div>
                    <div className="col">...</div>
                </div>
            </div>
        </section> : null}</>
    )
}

export default Modal
