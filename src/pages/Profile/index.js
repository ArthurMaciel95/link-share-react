import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoReduce from 'assets/svg/logo-reduce.svg'
import Avatar from 'assets/images/avatar.jpeg'
import * as Buttons from 'components/Buttons'
import plusIcon from 'assets/svg/icon_plus.svg'
import Logo from 'utils/links-logos'
import ProfileIcon from 'assets/svg/profile.svg';
import LinkChainIcon from 'assets/svg/link-chain.svg';
import CloseIcon from 'assets/svg/close.svg'
import CardLink from 'components/CardLink'
import Modal from 'components/Modal'
import { Image, HeaderHome, PaineButton } from './styles'
import { UserServices } from 'services/api/user'
import DataNotFound from 'components/DataNotFound'
import ProfileInfo from 'components/ProfileInfo'
import LinkArea from 'components/LinkArea'

const ProfilePage = () => {
    const userService = new UserServices()
    const [user, setUser] = useState(undefined)
    const getUser = () => userService.refresh().then((res) => setUser(res.data))
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)
    const handlerButton = () => setShowModal(true)

    useEffect(getUser, [])

    const handleButton = () => {

        setShowModal(true)
    }
    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <h3>Escolha uma das plataformas para criar um link.</h3>
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
            </Modal>
            <HeaderHome>
                <section className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-between align-items-center my-md-2">
                            <img src={logoReduce} alt="" />
                            <div className='d-flex '>
                                <p className='text-white'>{user && user.body.nickname}</p>
                                <img src={Avatar} alt="avatar image" className='rounded-circle mx-2' style={{ width: '30px', height: '30px' }} />
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="row">
                            <div className="col-md-12">
                                <Image src={Avatar} alt="avatar image profile" />
                            </div>
                        </div>
                        <div className="row mt-2 rounded ">
                            <div className="col-lg-4 col-sm-12 bg-white rounded mh-25  p-3 shadow-sm" style={{ maxHeight: "281px" }}>
                                <h4 className='text-dark mt-3'>{user && user.body.nickname}</h4>
                                <p className='text-black-50 fs-5'>{user && user.body.email}</p>
                                <p className='text-black-50'>Lorem Ipsum is simply dummy text of the printing and typeset
                                    ting industry. Lorem Ipsum has been the industry's standard
                                    dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="col-md-7 offset-md-1 position-relative">
                                <PaineButton>
                                    <Buttons.Primary onClick={e => handleButton()}>
                                        <img src={LinkChainIcon} /> Adicionar Link
                                    </Buttons.Primary>
                                    <Link to="/profile">
                                        <Buttons.Primary>
                                            <img src={ProfileIcon} /> Profile
                                        </Buttons.Primary>
                                    </Link>
                                </PaineButton>
                                <ProfileInfo />
                            </div>
                        </div>
                    </section>
                </section>
            </HeaderHome>

        </>
    )
}

export default ProfilePage
