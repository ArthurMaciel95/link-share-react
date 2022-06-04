import React, { useContext, useEffect, useRef, useState } from "react";
import { QrContainer, QrCard } from "./styles";
import QRCode from "qrcode";
import Backdrop from "@mui/material/Backdrop";
import { useLocation, Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { AppContext } from "context";

const QrCodePage = () => {
    let { t, i18n } = useTranslation()
    const { loading, toggleLoading, user, getUser } = useContext(AppContext);
    const canvas = useRef();
    const changeLoading = () => toggleLoading(!loading);
    useEffect(() => getUser, []);

    const fakeLoad = () => {
        if (!user) return;
        changeLoading();
        QRCode.toCanvas(canvas.current, `https://www.linkshare.com.br/v/${user.body.nickname}`);
        setTimeout(() => toggleLoading(false), 2000);
    };
    useEffect(() => fakeLoad, [user]);
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
            <QrContainer>
                <QrCard>
                    <Link to="/home">
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            disableElevation
                            sx={{
                                position: "absolute",
                                top: "20px",
                                left: "20px",
                            }}
                        >
                            {t('qrcode.back')}
                        </Button>
                    </Link>
                    <h3 className="text-center m-4">
                        {t('qrcode.subtitle')}
                    </h3>
                    <h3>LinkShare.com</h3>
                    <p>{user && user.body.email}</p>
                    <canvas ref={canvas} id="canvas"></canvas>
                </QrCard>
            </QrContainer>
        </>
    );
};

export default QrCodePage;
