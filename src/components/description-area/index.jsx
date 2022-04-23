import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import qrCodeIcon from 'assets/svg/qrcode.svg'

import IconButton from '@mui/material/IconButton';
const DescriptionArea = ({ user, loading, setLoading }) => {
    const navigate = new useNavigate()

    function handlerQrcode() {
        setLoading(true)
        return setTimeout(() => {
            setLoading(false)
            return navigate(`/profile/qrcode?url=https://www.linkshare.com.br/visitor/${user.body.nickname}&email=${user.body.email}`)
        }, 2000)
    }
    return (
        <div
            className="col-lg-4 col-sm-12 rounded mh-25  "
            style={{ maxHeight: "281px" }}
        >
            <div className="bg-white shadow-sm  mt-2 rounded  p-3 position-relative">

                <span className="qrcode-section">
                    <IconButton aria-label="qrcode" onClick={handlerQrcode}>
                        <img src={qrCodeIcon} className='qrcode-image' alt="random dots, qr code" />
                    </IconButton>
                </span>


                <h4 className="text-dark mt-3">
                    {user && user.body.nickname}
                </h4>
                <p className="text-black-50 fs-5">
                    {user && user.body.email}
                </p>
                <p className="text-black-50">
                    {user && user.body.description}
                </p>
            </div>
        </div>
    )
}

export default DescriptionArea