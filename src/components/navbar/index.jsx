import React, { useState } from "react";
import logoReduce from "assets/svg/logo-reduce.svg";
import Avatar from "assets/images/avatar.jpeg";
import PlusIcon from "assets/svg/icon_plus.svg";
import Modal from "components/modal";
import { useNavigate } from 'react-router-dom';
import { NavbarStyle } from './styles'
import { useAppContext } from "context/AppContext";
import { useColorMode } from "context/ColorModeContext";
import {
    Settings,
    Logout,
    DarkMode,
    LightMode,
    Language,
    Translate
} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu'
import {
    List,
    ListItem,
    Tooltip,
    IconButton,
    Box,
    Menu,
    Drawer,
    MenuItem,
    ListItemIcon,
    Typography,
    Backdrop,
    CircularProgress,
    ListItemText,
    Link,
    Button
} from "@mui/material";

import { useTranslation } from "react-i18next";
const Navbar = ({ user }) => {
    let { t, i18n } = useTranslation()
    const { loading, toggleLoading, visitor, toggleModal } = useAppContext();
    const { mode, toggleColorMode } = useColorMode()
    const navigate = new useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const openAnchor = Boolean(anchorEl);
    const openAnchorMenu = Boolean(anchorElMenu)
    const [open, setOpen] = useState(false);
    let anchor = "right";

    const options = [{ name: t('menu_change_language.portuguese'), lng: 'pt' }, { name: t('menu_change_language.english'), lng: 'en' }];

    const ITEM_HEIGHT = 48;

    const handleClick = (e) => setAnchorEl(e.currentTarget);
    const handleClickMenu = (e) => setAnchorElMenu(e.currentTarget)

    const handleClose = () => setAnchorEl(null);
    const handlerCloseMenu = () => setAnchorElMenu(null)
    const changeToLogin = () => {
        toggleLoading(true);
        return setTimeout(() => {
            toggleLoading(false);
            navigate("/", { replace: true });
        }, 2000);
    };

    function navigateToLogin() {
        return navigate('/', { replace: true })
    }

    function changeTheme() {
        return toggleColorMode()
    }

    function changeLanguage(language) {
        handlerCloseMenu()
        return i18n.changeLanguage(language)
    }

    const toggleDrawer = (open) => (e) => {
        if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;
        setOpen(open);
    };
    const list = () => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
                padding: 2,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[
                    {
                        text: t('drawer.settings'),
                        icon: <Settings />,
                        action: () => console.log('click'),

                    },
                    {
                        text: t('drawer.logout'),
                        icon: <Logout />,
                        action: navigateToLogin,
                    },

                ].map(({ text, icon, action }, index) => (
                    <ListItem button key={text} onClick={action} disabled={text === t('drawer.settings')}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
            {!visitor && (
                <Drawer
                    anchor={anchor}
                    open={open}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            )}
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
            <NavbarStyle>
                <div className="col-md-12 d-flex justify-content-between align-items-center py-2">
                    <img src={logoReduce} alt="" />
                    <div className="hamburger">
                        <IconButton
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon fontSize="large" sx={{ fill: '#fff' }} />
                        </IconButton>
                    </div>
                    <div className="d-flex align-items-center justify-content-center  profile-nav-area">
                        <Tooltip title={t('home.tooltip.change_language')}>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={openMenu ? "long-menu" : undefined}
                                aria-expanded={openMenu ? "true" : undefined}
                                aria-haspopup="true"
                                onClick={handleClickMenu}
                            >
                                <Translate fontSize="medium" sx={{ fill: '#fff' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                "aria-labelledby": "long-button"
                            }}
                            anchorEl={anchorElMenu}
                            open={openAnchorMenu}
                            onClose={handlerCloseMenu}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: "20ch"
                                }
                            }}
                        >
                            {options.map(({ name, lng }) => (
                                <MenuItem
                                    key={name}
                                    value={lng}
                                    onClick={() => changeLanguage(lng)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Menu>
                        {/* <Tooltip title={t('home.tooltip.change_theme')}>
                            <IconButton
                                onClick={changeTheme}
                                size="small"
                                sx={{ ml: 2 }}

                            >
                                {mode === 'light' ? <DarkMode fontSize="medium" sx={{ fill: '#fff' }} /> : <LightMode fontSize="medium" sx={{ fill: '#fff' }} />}
                            </IconButton>
                        </Tooltip> */}
                        <Tooltip title={t('home.tooltip.account_settings')}>
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={
                                    openAnchor ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={openAnchor ? "true" : undefined}
                            >
                                <img
                                    src={
                                        (user && user.body.pic_profile) ||
                                        Avatar
                                    }
                                    alt="avatar image"
                                    className="rounded-circle"
                                    style={{ width: "45px", height: "45px" }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={openAnchor}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    "&:before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        left: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform:
                                            "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                        >
                            <MenuItem disabled>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                {t('home.menu.settings')}
                            </MenuItem>
                            <MenuItem onClick={(e) => changeToLogin()}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                {t('home.menu.log_out')}
                            </MenuItem>
                        </Menu>
                        <div className="flex flex-column mx-2 align-items-start">
                            <p className="text-white m-0">
                                {user && user.body.nickname}
                            </p>
                        </div>
                        <Button
                            onClick={() => toggleModal(true)}
                            variant="outlined"
                            color="secondary"
                        >
                            <img
                                src={PlusIcon}
                                className="icon-plus"
                                alt="icon plus"
                            />
                            Link
                        </Button>
                    </div>
                </div>
            </NavbarStyle>
        </>
    );
};

export default Navbar;
