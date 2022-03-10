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
import Navbar from 'components/Navbar'
import BreadCrumb from 'components/BreadCrumb'
import homeIcon from 'assets/svg/home.svg'
import arrowRigthIcon from 'assets/svg/arrow-right-bread-crumb.svg'
import profileBreadIcon from 'assets/svg/profile-bread.svg'

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

    const Crumb = [{
        icon: homeIcon,
        page: 'Home'
    },
    {
        icon: profileBreadIcon,
        page: 'Profile'
    }
    ]
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
                    <LinkArea name="BuyMeACoffe" logo={Logo.buymeacoffe}></LinkArea>
                </div>
            </Modal>
            <HeaderHome>
                <section className="container">
                    <Navbar user={user} setShowModal={setShowModal}/>
                    <section>
                        <div className="row">
                            <div className="col-md-12 header-image-avatar mt-3 d-flex position-relative">
                                <Image src={user && user.body.pic_profile || Avatar} alt="avatar image profile" />
                                <BreadCrumb crumb={Crumb}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 mh-25" style={{ maxHeight: "281px" }}>
                                <div className='bg-white shadow-sm  mt-2 rounded  p-3'>
                                <h4 className='text-dark mt-3'>{user && user.body.nickname}</h4>
                                <p className='text-black-50 fs-5'>{user && user.body.email}</p>
                                <p className='text-black-50'>{user && user.body.description}
                                </p>
                                </div>
                             
                            </div>
                            <div className="col-md-7 offset-md-1 position-relative link-column">
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
                                <ProfileInfo dataUser={user} />
                            </div>
                        </div>
                    </section>
                </section>
            </HeaderHome>

        </>
    )
}

export default ProfilePage
