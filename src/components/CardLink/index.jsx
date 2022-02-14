import React, { useState } from 'react'
import { Card } from './styles.js'
import threeDots from '../../assets/svg/three-dots.svg'
import ModalCardSettings from 'components/ModalCardSettings'
const CardLink = ({ name, image, link, handleClickDots,createAt }) => {

    const [ openModalSettings, setOpenModalSettings] = useState(false)


    return (
        <Card>
            <img src={image} alt={` logo`} className='obj-fit m-2' style={{ height: '45px', objectFit: 'contain' }} />
            <div className="body-card d-flex flex-column mx-4">
                <h3 className='text-dark fs-4'>{name}</h3>
                <a href={`https://${link}`} target="_blank" className='text-black-50'>{link}</a>
            </div>
            <div className='card-settings'>
                <p className='create-at'>{createAt}</p>
                <img src={threeDots} alt="icon settings" className='btn-settings' onClick={()=> setOpenModalSettings(true)}/>
                {openModalSettings && <ModalCardSettings/>}
            </div>
        </Card>
    )
}

export default CardLink