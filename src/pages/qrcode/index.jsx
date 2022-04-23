import React, { useEffect, useRef, useState } from 'react'
import { QrContainer, QrCard } from "./styles";
import QRCode from 'qrcode'
import Backdrop from '@mui/material/Backdrop';
import { useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
const QrCodePage = () => {
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search);
    const canvas = useRef()
    const [open, setOpen] = useState(false);


    useEffect(() => {

        if (!searchParams.has('url') && !searchParams.has('email'))
            toast.warn('Attributes in url not found!')

        QRCode.toCanvas(canvas.current, searchParams.url, (err) => {
            console.log(err)
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
                    <h5>{searchParams.email}</h5>
                    <canvas ref={canvas} id='canvas'></canvas>
                </QrCard>
            </QrContainer>
        </>
    )
}

export default QrCodePage