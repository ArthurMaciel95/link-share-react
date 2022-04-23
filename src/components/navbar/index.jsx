import React, { useState } from "react";
import Link from '@mui/material/Link'
import logoReduce from "assets/svg/logo-reduce.svg";
import Avatar from "assets/images/avatar.jpeg";
import Button from '@mui/material/Button'
import PlusIcon from "assets/svg/icon_plus.svg";
import Modal from "components/modal";
import { useNavigate } from 'react-router-dom';

import { NavbarStyle } from './styles'
const Navbar = ({ user, setOpen }) => {
    const navigate = new useNavigate();

    const changeToLogin = () => {
        navigate("/", { replace: true });
    }
    return (
        <NavbarStyle>
            <div className="col-md-12 d-flex justify-content-between align-items-center mb-2">
                <img src={logoReduce} alt="" />
                <div className="d-flex align-items-center justify-content-center  profile-nav-area">

                    <img
                        src={(user && user.body.pic_profile) || Avatar}
                        alt="avatar image"
                        className="rounded-circle"
                        style={{ width: "45px", height: "45px" }}
                    />
                    <div className="flex flex-column mx-2 align-items-start">
                        <p className="text-white m-0">
                            {user && user.body.nickname}
                        </p>
                        <Link
                            component="button"
                            variant="body2"
                            color="#FFF"
                            onClick={(e) => changeToLogin()}
                        >
                            Log Out
                        </Link>

                    </div>
                    <Button onClick={(e) => setOpen(state => !state)} variant="outlined" color="secondary">
                        <img src={PlusIcon} className="icon-plus" alt="icon plus" /> Link
                    </Button>
                </div>
            </div>
        </NavbarStyle>
    );
};


export default Navbar;
