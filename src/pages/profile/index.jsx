import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logoReduce from "assets/svg/logo-reduce.svg";
import Avatar from "assets/images/avatar.jpeg";
import * as Buttons from "components/buttons";
import plusIcon from "assets/svg/icon_plus.svg";
import Logo from "utils/links-logos";
import ProfileIcon from "assets/svg/profile.svg";
import LinkChainIcon from "assets/svg/link-chain.svg";
import CloseIcon from "assets/svg/close.svg";
import CardLink from "components/card-link";
import Modal from "components/modal";
import { Image, HeaderHome, Painel } from "./styles";
import DataNotFound from "components/data-not-found";
import ProfileInfo from "components/profile-info";
import LinkArea from "components/link-area";
import Navbar from "components/navbar";
import BreadCrumb from "components/bread-crumb";
import homeIcon from "assets/svg/home.svg";
import arrowRightIcon from "assets/svg/arrow-right-bread-crumb.svg";
import profileBreadIcon from "assets/svg/profile-bread.svg";
import Button from "@mui/material/Button";
import ClipBoardArea from "components/clip-board-area";
import DescriptionArea from "components/description-area";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";
import { AppContext } from "context";

const ProfilePage = () => {
    let { t, i18n } = useTranslation()
    const { loading, user, getUser, toggleLoading, showModal, toggleModal, fields } = useContext(AppContext);
    const changeLoading = () => toggleLoading(!loading);
    const openModal = () => toggleModal(true);
    useEffect(() => getUser, []);
    if (!user) return null;

    const Crumb = [
        {
            icon: homeIcon,
            page: "Home",
        },
        {
            icon: profileBreadIcon,
            page: t('bread_crumb.profile'),
        },
    ];
    return (
        <>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
                onClick={changeLoading}
            >
                <CircularProgress color="primary" />
            </Backdrop>
            <Modal open={showModal} setOpen={toggleModal} />
            <HeaderHome>
                <section className="container">
                    <Navbar user={user} setOpen={toggleModal} />
                    <section>
                        <div className="row">
                            <div className="col-md-12 header-image-avatar mt-3 d-flex position-relative">
                                <Image
                                    src={
                                        (user && user.body.pic_profile) ||
                                        Avatar
                                    }
                                    alt="avatar image profile"
                                />
                                <BreadCrumb crumb={Crumb} />
                            </div>
                        </div>
                        <div className="row">
                            <DescriptionArea user={user} loading={loading} />
                            <div className="col-lg-7 offset-md-1 position-relative link-column">
                                <Painel>
                                    <Button
                                        onClick={openModal}
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        disableElevation
                                        disabled={fields}
                                    >
                                        <img src={LinkChainIcon} />{t('profile.buttons.add_link')}
                                    </Button>
                                    <Link to="/home">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            disableElevation
                                            disabled={fields}
                                        >
                                            {t('profile.buttons.back_to_home')}
                                        </Button>
                                    </Link>
                                    <ClipBoardArea
                                        nickname={user && user.body.nickname}
                                    />
                                </Painel>
                                <ProfileInfo dataUser={user} />
                            </div>
                        </div>
                    </section>
                </section>
            </HeaderHome>
        </>
    );
};

export default ProfilePage;
