import React, { useState } from 'react'
import logoReduce from "assets/svg/logo-reduce.svg";
import Avatar from "assets/images/avatar.jpeg";
import * as Button from 'components/Buttons'
import PlusIcon from 'assets/svg/icon_plus.svg'
import Modal from 'components/Modal';
import { NavbarStyle } from './styles';

const Navbar = ({ user, setShowModal }) => {
    return (
        <NavbarStyle>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between align-items-center my-md-2">
                    <img src={logoReduce} alt="" />
                    <div className="d-flex align-items-center justify-content-center profile-nav-area">
                        <p className="text-white m-0">
                            {user && user.body.nickname}
                        </p>
                        <img
                            src={Avatar}
                            alt="avatar image"
                            className="rounded-circle mx-2"
                            style={{ width: "30px", height: "30px" }}
                        />
                        <Button.OutlineHeader onClick={(e) => setShowModal(state => !state)}> <img src={PlusIcon} className="icon-plus" alt="icon plus" /> Link</Button.OutlineHeader>
                    </div>
                </div>
            </div>
        </NavbarStyle>
    )
}

export default Navbar