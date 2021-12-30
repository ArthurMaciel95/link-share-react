import React, { useState } from 'react'
import logoReduce from '../../assets/svg/logo-reduce.svg'
import Avatar from '../../assets/images/avatar.png'
import * as Buttons from '../../components/Buttons'
import plusIcon from '../../assets/svg/icon_plus.svg'
import Logo from '../../utils/links-logos'
import CardLink from '../../components/CardLink'
import Modal from '../../components/Modal/index.'
const HomePage = () => {

    const [showModal, setShowModal] = useState(false)

    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    const handlerButton = () => {
        setShowModal(true)
    }
    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <header className="profile w-100 bg-primary-color h-25" style={{ maxHeight: 'px' }}>
                <section className=" container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-between align-items-center my-md-2">
                            <img src={logoReduce} alt="" />
                            <div className='d-flex '>
                                <p className='text-white'>Andresa_santos42</p>
                                <img src={Avatar} alt="avatar image" className='rounded-circle mx-2' style={{ width: '30px', height: '30px' }} />
                                <Buttons.Primary outline={true} handlerButton={handlerButton} value="Link" icon={plusIcon}>+ link</Buttons.Primary>
                            </div>
                        </div>
                    </div>
                    <section className=''>
                        <div className="row">
                            <div className="col-md-12">
                                <img src={Avatar} alt="" />

                            </div>
                        </div>
                        <div className="row mt-2 rounded ">
                            <div className="col-4 bg-white rounded mh-25  p-3 shadow-sm " style={{ maxHeight: "281px" }}>
                                <h4 className='text-dark mt-3'>Andresa_santos42</h4>
                                <p className='text-black-50 fs-5'>@andresasantos42</p>
                                <p className='text-black-50'>Lorem Ipsum is simply dummy text of the printing and typeset
                                    ting industry. Lorem Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, </p>
                            </div>
                            <div className="col-md-7 offset-md-1   ">
                                <CardLink image={Logo['twitch']} name="Twitch" link="twitch/ArthurRocha95" />
                                <CardLink image={Logo.youtube} name="Youtube" link="youtube/ArthurRocha95" />
                                <CardLink image={Logo.twitter} name="Twitter" link="twitter/ArthurRocha95" />
                                <CardLink image={Logo.linkdin} name="Linkdin" link="linkdin/ArthurRocha95" />
                            </div>
                        </div>
                    </section>
                </section>
            </header>
        </>
    )
}

export default HomePage
