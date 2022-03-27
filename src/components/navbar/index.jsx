import React, { useState } from "react";
import logoReduce from "assets/svg/logo-reduce.svg";
import Avatar from "assets/images/avatar.jpeg";
import Button from '@mui/material/Button'
import PlusIcon from "assets/svg/icon_plus.svg";
import Modal from "components/modal";
import { NavbarStyle } from './styles'
const Navbar = ({ user, setOpen }) => {
    return (
        <NavbarStyle>
            <div className="col-md-12 d-flex justify-content-between align-items-center mb-2">
                <img src={logoReduce} alt="" />
                <div className="d-flex align-items-center justify-content-center profile-nav-area">
                    <p className="text-white m-0">
                        {user && user.body.nickname}
                    </p>
                    <img
                        src={(user && user.body.pic_profile) || Avatar}
                        alt="avatar image"
                        className="rounded-circle mx-2"
                        style={{ width: "30px", height: "30px" }}
                    />
                    <Button onClick={(e) => setOpen(state => !state)} variant="outlined" color="secondary">
                        <img src={PlusIcon} className="icon-plus" alt="icon plus" /> Link
                    </Button>
                </div>
            </div>
        </NavbarStyle>
    );
};


export default Navbar;
