import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "assets/images/avatar.jpeg";
import * as Buttons from "components/buttons";
import plusIcon from "assets/svg/icon_plus.svg";
import Logo from "utils/links-logos";
import CardLink from "components/card-link";
import Modal from "components/modal";
import { Image, HeaderHome, PaineButton } from "./styles";
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
import { TagsNavigation } from "components/tags-navigation";
import BreadCrumb from "components/bread-crumb";
import homeIcon from "assets/svg/home.svg";
import profileBreadIcon from "assets/svg/profile-bread.svg";
import ClipBoardArea from "components/clip-board-area";
import enUS from "date-fns/esm/locale/en-US/index.js";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import DescriptionArea from "components/description-area";
import tableIcon from "assets/svg/table.svg";
import { Validation } from "utils/validation.js";

import { useAppContext } from "context/AppContext";

const HomePage = () => {
    const { getUser, links, user, loading,toggleLoading, showModal, toggleModal} = useAppContext();
    const [filterTag, setFilterTag] = useState("All");
    const [linksFiltered, setLinksFiltered] = useState([]);
    const [tags, setTags] = useState(["All", "Social", "Payment", "Contact"]);

    const ShowAllLinkOfUser = () => {
        return linksFiltered.map((link) => (
            <CardLink
                key={`${linksFiltered.length > 0 ? link.id_link : 0}`}
                id={link.id_link}
                image={Logo[link.type.toLowerCase()] || Logo.customlink}
                name={link.type}
                link={Validation.addHttps(link.context.toLowerCase())}
                createAt={formatDistance(new Date(link.createdAt), new Date(), {
                    addSuffix: true,
                    locale: enUS,
                })}
            />
        ));
    };

    const Crumb = [
        {
            icon: homeIcon,
            page: "Home",
        },
    ];

    const setFilter = (name) => {
        setFilterTag(name);
        if (name === "All") setLinksFiltered(links);
        else setLinksFiltered(links.filter((l) => l.tag === name.toLowerCase()));
    };
    const changeLoading = () => toggleLoading(!loading);
    const openModal = () => toggleModal(true);
    useEffect(getUser, []);
    useEffect(() => setLinksFiltered(links), [links]);
     
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
                            <DescriptionArea user={user} />
                            <div className="col-lg-7 offset-md-1 position-relative link-column">
                                <PaineButton>
                                    <Button
                                        onClick={openModal}
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
                                <TagsNavigation
                                    tags={tags}
                                    setFilter={setFilter}
                                    filter={filterTag}
                                />
                                {user ? (
                                    <>
                                        {links.length > 0 ? (
                                            ShowAllLinkOfUser()
                                        ) : (
                                            <DataNotFound isVisitor={false} />
                                        )}
                                    </>
                                ) : (
                                    <>{<SkeletonCards />}</>
                                )}
                            </div>
                        </div>
                    </section>
                </section>
            </HeaderHome>
        </>
    );
};

export default HomePage;
