import React, { useEffect, useRef, useState } from 'react'
import { QrContainer, QrCard } from "./styles";
import QRCode from 'qrcode'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const QrCodePage = () => {

    const canvas = useRef()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        QRCode.toCanvas(canvas.current, 'https://linkshare.com.br/visitor/@Arthurnogueira13', (err) => {

        })
    }, [])


    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="primary" />
            </Backdrop>
            <QrContainer>
                <QrCard>
                    <h3>Linkshare.com</h3>
                    <h5>@ArthurMaciel95</h5>
                    <canvas ref={canvas} id='canvas'></canvas>
                </QrCard>
            </QrContainer>
        </>
    )
}

export default QrCodePage