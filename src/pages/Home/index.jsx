import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "assets/images/avatar.jpeg";
import * as Buttons from "components/buttons";
import plusIcon from "assets/svg/icon_plus.svg";
import Logo from "utils/links-logos";
import CardLink from "components/card-link";
import Modal from "components/modal";
import { Image, HeaderHome, PaineButton, Painel } from "./styles";
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
import { LinksUrls } from 'services/api/link'
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

const HomePage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const linkService = new LinksUrls();
    const navigate = new useNavigate();
    const userService = new UserServices();
    const validation = new Validation()
    const [disabled, setDisable] = useState(false)
    const [fileCSV, setFileCSV] = useState('')
    const [user, setUser] = useState(undefined);
    const [open, setOpen] = useState(false);
    const openMenuSettins = Boolean(anchorEl);
    const [loading, setLoading] = useState(false);
    const [links, setLinks] = useState([]);
    const [filterTag, setFilterTag] = useState("All");
    const [tags, setTags] = useState(["All", "Social", "Payment", "Contact"]);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenuSettins(true)
    };
    const handleCloseMenuSettins = () => {
        setAnchorEl(null);
    };

    const ITEM_HEIGHT = 48;

    const handlerButton = () => setOpen(true);
    const getUser = () =>
        userService.refresh().then((res) => {
            setUser(res.data);
            setLinks(res.data.body.links);
        });

    const userHaveAnLink = () => links.length > 0;
    const ShowAllLinkOfUser = () => {
        return links.map((link) => (
            <CardLink
                Key={`${links.length > 0 ? link.id_link : 0}`}
                id={link.id_link}
                image={Logo[link.type.toLowerCase()] || Logo.customlink}
                name={link.type}
                link={validation.addHttps(link.context.toLowerCase())}
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

    const handleClose = () => setLoading(false);
    const handleToggle = () => setLoading(!open);
    const setFilter = (name) => {
        setFilterTag(name);
        if (name === "All") {
            setLinks(user.body.links);
        } else {
            const newLinks = user.body.links.filter(
                (link) => link.tag === name.toLowerCase()
            );
            setLinks(newLinks);
        }
    };

    const handlerDownloadCSV = async () => {
        handleCloseMenuSettins()
        setDisable(true)
        setLoading(true)
        const result = await linkService.downloadCSV();
        let a = document.createElement('a');
        a.href = result.data.body.url
        a.download = a.href.substr(a.href.lastIndexOf('/') + 1);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        toast.success('file download with success!')
        setDisable(false)
        setLoading(false)
    }
    useEffect(getUser, [open]);

    return (
        <>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
                onClick={handleClose}
            >
                <CircularProgress color="primary" />
            </Backdrop>
            <Modal open={open} setOpen={setOpen} />
            <HeaderHome>
                <section className="container">
                    <Navbar
                        user={user}
                        setOpen={setOpen}
                        setLoading={setLoading}
                    />
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
                            <DescriptionArea
                                user={user}
                                loading={loading}
                                setLoading={setLoading}
                            />
                            <div className="col-lg-7 offset-md-1 position-relative link-column">
                                <Painel>
                                    <div className="painel-buttons">

                                        <Button
                                            onClick={(e) => handlerButton()}
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            disableElevation
                                            disabled={disabled}
                                        >
                                            <img src={LinkChainIcon} /> Add Link
                                        </Button>
                                        <Link to="/profile">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                disabled={disabled}
                                                disableElevation
                                            >
                                                <img src={ProfileIcon} /> Profile
                                            </Button>
                                        </Link>
                                        <ClipBoardArea
                                            nickname={user && user.body.nickname}
                                            disabled={disabled}
                                        />
                                    </div>
                                    <div className="painel-settings">
                                        <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={openMenuSettins ? 'long-menu' : undefined}
                                            aria-expanded={openMenuSettins ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                            className='no-max-width'
                                        >
                                            <MoreHorizRounded sx={{ fill: '#909090' }} fontSize="large" />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'long-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={openMenuSettins}
                                            onClose={handleCloseMenuSettins}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                },
                                            }}
                                        >

                                            <MenuItem onClick={handlerDownloadCSV}>
                                                <ListItemIcon>
                                                    <DownloadIcon fontSize="small" />
                                                </ListItemIcon>

                                                <ListItemText>Export to Excel</ListItemText>
                                            </MenuItem>


                                        </Menu>
                                    </div>

                                </Painel>
                                <TagsNavigation
                                    tags={tags}
                                    setFilter={setFilter}
                                    filter={filterTag}
                                />
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
                            </div>
                        </div>
                    </section>
                </section>
            </HeaderHome>
        </>
    );
};

export default HomePage;
