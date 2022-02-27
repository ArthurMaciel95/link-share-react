import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "assets/images/avatar.jpeg";
import * as Buttons from "components/Buttons";
import plusIcon from "assets/svg/icon_plus.svg";
import Logo from "utils/links-logos";
import CardLink from "components/CardLink";
import Modal from "components/Modal";
import { Image, HeaderHome, PaineButton } from "./styles";
import { UserServices } from "services/api/user";
import DataNotFound from "components/DataNotFound";
import Loading from "components/Loading";
import ArrowLeftIcon from 'assets/images/icon_arrow_left.png';
import ProfileIcon from 'assets/svg/profile.svg';
import LinkChainIcon from 'assets/svg/link-chain.svg';
import LinkArea from 'components/LinkArea'
import { formatDistance, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import CardSkeleton from "components/Skeleton";
import SkeletonCards from "components/Skeleton";
import Navbar from 'components/Navbar'
import BreadCrumb from "components/BreadCrumb";
import homeIcon from 'assets/svg/home.svg'
import arrowRigthIcon from 'assets/svg/arrow-right-bread-crumb.svg'
import profileBreadIcon from 'assets/svg/profile-bread.svg'

const HomePage = () => {

    const userService = new UserServices();
    const [user, setUser] = useState(undefined);
    const [showModal, setShowModal] = useState(false);


    const handlerButton = () => setShowModal(true);

    const getUser = () => userService.refresh().then((res) => { setUser(res.data) });

    const handlerCloseModal = () => setShowModal(false)

    const userHaveAnLink = () => user.body.links.length > 0

    const ShowAllLinkOfUser = () => {
        
        return user.body.links.map((link) => (
           <>
            <CardLink
                key={link.url}
                id={link.id_link}
                image={Logo[link.type.toLowerCase()] || Logo.customlink}
                name={link.type}
                link={link.url.toLowerCase()}
                createAt={formatDistance(new Date(link.createdAt), new Date(), { addSuffix: true, locale: ptBR })}
            /></>
        ))
    }

    const Crumb = [{
        icon: homeIcon,
        page: 'Home'
    }
    ]

    useEffect(getUser, [showModal]);
   
    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <HeaderHome>
                <section className="container">
                   <Navbar user={user} setShowModal={setShowModal}/>
                    <section className="">
                        <div className="row">
                            <div className="col-md-12 header-image-avatar mt-3 d-flex position-relative">
                                <Image
                                    src={Avatar}
                                    alt="avatar image profile"
                                />
                                 <BreadCrumb crumb={Crumb}/>
                            </div>
                           
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-4 col-sm-12 rounded mh-25  "
                                style={{ maxHeight: "281px" }}
                            >
                              
                                <div className="bg-white shadow-sm  mt-2 rounded  p-3">
                                <h4 className="text-dark mt-3">
                                    {user && user.body.nickname}
                                </h4>
                                <p className="text-black-50 fs-5">
                                    {user && user.body.email}
                                </p>
                                <p className="text-black-50">
                                    {user && user.body.description}
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-7 offset-md-1 position-relative link-column mt-lg-3">
                                <PaineButton>
                                    <Buttons.Primary onClick={e => handlerButton()}>
                                        <img src={LinkChainIcon} /> Adicionar Link
                                    </Buttons.Primary>
                                    <Link to="/profile">
                                        <Buttons.Primary>
                                            <img src={ProfileIcon} /> Profile
                                        </Buttons.Primary>
                                    </Link>
                                </PaineButton>

                                <>{user ? <>{userHaveAnLink() ? (
                                    ShowAllLinkOfUser()
                                ) : <DataNotFound />}</> : <>{<SkeletonCards />}</>}</>
                            </div>
                        </div>
                    </section>
                </section>
            </HeaderHome>
        </>
    );
};

export default HomePage;
