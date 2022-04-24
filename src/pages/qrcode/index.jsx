import React, { useEffect, useRef, useState } from 'react'
import { QrContainer, QrCard } from "./styles";
import QRCode from 'qrcode'
import Backdrop from '@mui/material/Backdrop';
import { useLocation, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { UserServices } from 'services/api/user'
const QrCodePage = () => {

    const userApi = new UserServices()
    const navigate = new useNavigate();

    const canvas = useRef()
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState('')


    useEffect(async () => {
        setOpen(true)
        const result = await userApi.refresh()
        setUser(result)

        QRCode.toCanvas(canvas.current, `https://www.linkshare.com.br/visitor/${result.data.body.nickaname}`, (err) => {

        })

        setOpen(false)
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
                    <h3 className='text-center m-4'>Bring the camera closer to your device to access this profile.</h3>
                    <h3>Linkshare.com</h3>
                    <p>{user && user.data.body.email}</p>
                    <canvas ref={canvas} id='canvas'></canvas>
                </QrCard>
            </QrContainer>
        </>
    )
}

export default QrCodePage