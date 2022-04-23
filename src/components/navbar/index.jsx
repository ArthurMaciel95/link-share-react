import React, { useState } from "react";
import Link from '@mui/material/Link'
import logoReduce from "assets/svg/logo-reduce.svg";
import Avatar from "assets/images/avatar.jpeg";
import Button from '@mui/material/Button'
import PlusIcon from "assets/svg/icon_plus.svg";
import Modal from "components/modal";
import { useNavigate } from 'react-router-dom';
import { NavbarStyle } from './styles'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const Navbar = ({ user, setOpen }) => {
    const navigate = new useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState(false)
    const openAnchor = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeToLogin = () => {
        setLoading(true)
        return setTimeout(() => {
            setLoading(false)
            navigate("/", { replace: true });
        }, 2000)
    }
    return (<>

        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={handleClose}
        >
            <CircularProgress color="primary" />
        </Backdrop>
        <NavbarStyle>

            <div className="col-md-12 d-flex justify-content-between align-items-center mb-2">
                <img src={logoReduce} alt="" />
                <div className="d-flex align-items-center justify-content-center  profile-nav-area">

                    <Tooltip title="Account Settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={openAnchor ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openAnchor ? 'true' : undefined}
                        >
                            <img
                                src={(user && user.body.pic_profile) || Avatar}
                                alt="avatar image"
                                className="rounded-circle"
                                style={{ width: "45px", height: "45px" }}
                            />
                        </IconButton >

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
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,

                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    left: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}

                    >

                        <MenuItem disabled>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={(e) => changeToLogin()}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                    <div className="flex flex-column mx-2 align-items-start">
                        <p className="text-white m-0">
                            {user && user.body.nickname}
                        </p>

                    </div>
                    <Button onClick={(e) => setOpen(state => !state)} variant="outlined" color="secondary">
                        <img src={PlusIcon} className="icon-plus" alt="icon plus" /> Link
                    </Button>
                </div>
            </div>
        </NavbarStyle>
    </>);
};


export default Navbar;
