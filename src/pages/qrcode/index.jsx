import React, { useEffect, useRef, useState } from 'react'
import { QrContainer, QrCard } from "./styles";
import QRCode from 'qrcode'
import Backdrop from '@mui/material/Backdrop';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { UserServices } from 'services/api/user'
import Button from '@mui/material/Button'

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
        console.log(result)
        QRCode.toCanvas(canvas.current, `https://www.linkshare.com.br/v/${result.data.body.nickname}`, (err) => {

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
                    <Link to='/home'>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            disableElevation
                            sx={{ position: 'absolute', top: '20px', left: '20px' }}
                        >
                            Back
                        </Button>
                    </Link>
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