import React, { useEffect, useRef } from 'react'
import { QrContainer, QrCard } from "./styles";
import QRCode from 'qrcode'
const QrCodePage = () => {

    const canvas = useRef()

    useEffect(() => {
        QRCode.toCanvas(canvas.current, 'https://linkshare.com.br/visitor/@Arthurnogueira13', (err) => {
            console.log(err)
        })
    }, [])


    return (
        <QrContainer>
            <QrCard>
                <h3>Linkshare.com</h3>
                <h5>@ArthurMaciel95</h5>
                <canvas ref={canvas} id='canvas'></canvas>
            </QrCard>
        </QrContainer>
    )
}

export default QrCodePage