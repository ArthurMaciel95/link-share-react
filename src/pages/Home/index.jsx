import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "assets/images/avatar.jpeg";
import * as Buttons from "components/buttons";
import plusIcon from "assets/svg/icon_plus.svg";
import Logo from "utils/links-logos";
import CardLink from "components/card-link";
import Modal from "components/modal";
import { Image, HeaderHome, PaineButton } from "./styles";
import { UserServices } from "services/api/user";
import DataNotFound from "components/data-not-found";
import Loading from "components/loading";
import ArrowLeftIcon from "assets/images/icon_arrow_left.png";
import ProfileIcon from "assets/svg/profile.svg";
import LinkChainIcon from "assets/svg/link-chain.svg";
import LinkArea from "components/link-area";
import { formatDistance, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import CardSkeleton from "components/skeleton";
import SkeletonCards from "components/skeleton";
import Navbar from "components/navbar";
import BreadCrumb from "components/bread-crumb";
import homeIcon from "assets/svg/home.svg";
import arrowRigthIcon from "assets/svg/arrow-right-bread-crumb.svg";
import profileBreadIcon from "assets/svg/profile-bread.svg";
import ClipBoardArea from "components/clip-board-area";
import enUS from "date-fns/esm/locale/en-US/index.js";
import Button from "@mui/material/Button";
const HomePage = () => {
    const userService = new UserServices();
    const [user, setUser] = useState(undefined);
    const [open, setOpen] = useState(false);

    const handlerButton = () => setOpen(true);
    const getUser = () =>
        userService.refresh().then((res) => {
            setUser(res.data);
        });

    const userHaveAnLink = () => user.body.links.length > 0;

    const ShowAllLinkOfUser = () => {
        return user.body.links.map((link) => (
            <>
                <CardLink
                    Key={`${user.body.links.length > 0 ? link.id_link : 0}`}
                    id={link.id_link}
                    image={Logo[link.type.toLowerCase()] || Logo.customlink}
                    name={link.type}
                    link={link.url.toLowerCase()}
                    createAt={formatDistance(
                        new Date(link.createdAt),
                        new Date(),
                        { addSuffix: true, locale: enUS }
                    )}
                />
            </>
        ));
    };

    const Crumb = [
        {
            icon: homeIcon,
            page: "Home",
        },
    ];

    useEffect(getUser, [open]);

    return (
        <>
            <Modal open={open} setOpen={setOpen} />
            <HeaderHome>
                <section className="container">
                    <Navbar user={user} setOpen={setOpen} />
                    <section className="">
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
                            <div className="col-lg-7 offset-md-1 position-relative link-column">
                                <PaineButton>
                                    <Button
                                        onClick={(e) => handlerButton()}
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        disableElevation
                                    >
                                        <img src={LinkChainIcon} /> Add Link
                                    </Button>
                                    <Link to="/profile">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            disableElevation
                                        >
                                            <img src={ProfileIcon} /> Profile
                                        </Button>
                                    </Link>
                                    <ClipBoardArea
                                        nickname={user && user.body.nickname}
                                    />
                                </PaineButton>

                                <>
                                    {user ? (
                                        <>
                                            {userHaveAnLink() ? (
                                                ShowAllLinkOfUser()
                                            ) : (
                                                <DataNotFound />
                                            )}
                                        </>
                                    ) : (
                                        <>{<SkeletonCards />}</>
                                    )}
                                </>
                            </div>
                        </div>
                    </section>
                </section>
            </HeaderHome>
        </>
    );
};

export default HomePage;
