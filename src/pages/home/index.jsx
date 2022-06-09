import React, { useState, useEffect, useMemo, useCallback, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "assets/images/avatar.jpeg";
import * as Buttons from "components/buttons";
import plusIcon from "assets/svg/icon_plus.svg";
import Logo from "utils/links-logos";
import CardLink from "components/card-link";
import Modal from "components/modal-group/modal-links";
import { Image, HeaderHome, PaineButton, Painel } from "./styles";
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
import tableIcon from 'assets/svg/table.svg';
import LoadingButton from '@mui/lab/LoadingButton';
import { Validation } from "utils/validation.js";
import { toast } from "react-toastify";
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizRounded from '@mui/icons-material/MoreHorizRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import threeDots from "../../assets/svg/three-dots.svg";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from "@mui/material/Divider";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AppContext } from "context";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    let { t, i18n } = useTranslation()
    const { getUser, user, links, loading, toggleLoading, showModal, toggleModal, downloadExcelFile, file } = useContext(AppContext);
    const [filterTag, setFilterTag] = useState("All");
    const [linksFiltered, setLinksFiltered] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null)
    const openMenuSettins = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenuSettins = () => {
        setAnchorEl(null);
    };

    const ITEM_HEIGHT = 48;

    const changeLoading = () => toggleLoading(!loading);
    const openModal = () => toggleModal(true);
    const userHaveAnLink = () => linksFiltered.length > 0;
    const profileImage = () => user && user.body.pic_profile ? user.body.pic_profile : Avatar;
    useEffect(() => getUser, []);
    useEffect(() => setLinksFiltered(links), [links]);
    useEffect(() => downloadExcelFile, [])
    useEffect(() => getUser, [open]);

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
            page: t('bread_crumb.home'),
        },
    ];

    const setFilter = (name) => {
        setFilterTag(name);
        if (name === "All") setLinksFiltered(links);
        else setLinksFiltered(links.filter((l) => l.tag === name.toLowerCase()));
    };

    const handlerDownloadCSV = async () => {
        handleCloseMenuSettins()
        let a = document.createElement('a');
        a.href = file.body.url
        a.download = a.href.substr(a.href.lastIndexOf('/') + 1);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        toast.success(t('toast_message.success.file_download_success'));
    }

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
                    <Navbar user={user} setOpen={openModal} />
                    <section>
                        <div className="row">
                            <div className="col-md-12 header-image-avatar mt-3 d-flex position-relative">
                                <Image
                                    src={profileImage()}
                                    alt="avatar image profile"
                                />
                                <BreadCrumb crumb={Crumb} />
                            </div>
                        </div>
                        <div className="row">
                            <DescriptionArea user={user} />
                            <div className="col-lg-7 offset-md-1 position-relative link-column">
                                <Painel>
                                    <div className="painel-buttons">

                                        <Button
                                            onClick={(e) => openModal()}
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            disableElevation

                                        >
                                            <img src={LinkChainIcon} /> {t('home.buttons.add_link')}
                                        </Button>
                                        <Link to="/profile">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"

                                                disableElevation
                                            >
                                                <img src={ProfileIcon} />{t('home.buttons.profile')}
                                            </Button>
                                        </Link>
                                        <ClipBoardArea
                                            nickname={user && user.body.nickname}

                                        />
                                    </div>
                                    <div className="painel-settings">
                                        <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={
                                                openMenuSettins
                                                    ? "long-menu"
                                                    : undefined
                                            }
                                            aria-expanded={
                                                openMenuSettins
                                                    ? "true"
                                                    : undefined
                                            }
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                            className="no-max-width"
                                        >
                                            <MoreHorizRounded
                                                sx={{ fill: "#909090" }}
                                                fontSize="large"
                                            />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                                "aria-labelledby":
                                                    "long-button",
                                            }}
                                            anchorEl={anchorEl}
                                            open={openMenuSettins}
                                            onClose={handleCloseMenuSettins}
                                            PaperProps={{
                                                style: {
                                                    maxHeight:
                                                        ITEM_HEIGHT * 4.5,
                                                    width: "20ch",
                                                },
                                            }}
                                        >
                                            <MenuItem
                                                onClick={handlerDownloadCSV}
                                            >
                                                <ListItemIcon>
                                                    <DownloadIcon fontSize="small" />
                                                </ListItemIcon>

                                                <ListItemText>
                                                    {t(
                                                        "home.ellips_menu.export_to_excel"
                                                    )}
                                                </ListItemText>
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </Painel>
                                <TagsNavigation
                                    setFilter={setFilter}
                                    filter={filterTag}
                                />
                                {user ? (
                                    <>
                                        {userHaveAnLink() ? (
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
