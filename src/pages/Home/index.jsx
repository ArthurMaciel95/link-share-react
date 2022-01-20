import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoReduce from "assets/svg/logo-reduce.svg";
import Avatar from "assets/images/avatar.jpeg";
import * as Buttons from "components/Buttons";
import plusIcon from "assets/svg/icon_plus.svg";
import Logo from "utils/links-logos";
import CardLink from "components/CardLink";
import Modal from "components/Modal/index.";
import { Image, HeaderHome, PaineButton } from "./styles";
import { UserServices } from "services/api/user";
import DataNotFound from "components/DataNotFound";
import Loading from "components/Loading";

const HomePage = () => {
    const userService = new UserServices();
    const [user, setUser] = useState(undefined);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);
    const handlerButton = () => setShowModal(true);
    const getUser = () => userService.refresh().then((res) => setUser(res.data));
    useEffect(getUser, []);

    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <HeaderHome>
                <section className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-between align-items-center my-md-2">
                            <img src={logoReduce} alt="" />
                            <div className="d-flex ">
                                <p className="text-white">
                                    {user && user.body.nickname}
                                </p>
                                <img
                                    src={Avatar}
                                    alt="avatar image"
                                    className="rounded-circle mx-2"
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </div>
                        </div>
                    </div>
                    <section className="">
                        <div className="row">
                            <div className="col-md-12">
                                <Image
                                    src={Avatar}
                                    alt="avatar image profile"
                                ></Image>
                            </div>
                        </div>
                        <div className="row mt-2 rounded ">
                            <div
                                className="col-lg-4 col-sm-12 bg-white rounded mh-25  p-3 shadow-sm"
                                style={{ maxHeight: "281px" }}
                            >
                                <h4 className="text-dark mt-3">
                                    {user && user.body.nickname}
                                </h4>
                                <p className="text-black-50 fs-5">
                                    {user && user.body.email}
                                </p>
                                <p className="text-black-50">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typeset ting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s,{" "}
                                </p>
                            </div>
                            <div className="col-md-7 offset-md-1 position-relative">
                                <PaineButton>
                                    <Buttons.Primary>
                                        Adicionar Link
                                    </Buttons.Primary>
                                    <Link to="/profile">
                                        <Buttons.Primary>
                                            Profile
                                        </Buttons.Primary>
                                    </Link>
                                </PaineButton>
                                {user && user.body.links.length ? (
                                    user.body.links.map((link) => (
                                        <CardLink
                                            key={link.id_link}
                                            image={
                                                Logo[link.type.toLowerCase()]
                                            }
                                            name={link.type}
                                            link={link.url.toLowerCase()}
                                        />
                                    ))
                                ) : (
                                    <DataNotFound />
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
