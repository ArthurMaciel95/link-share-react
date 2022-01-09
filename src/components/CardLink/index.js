import React from 'react'
import { Card } from './styles.js'


const CardLink = ({ name, image, link }) => {
    return (

        <Card>

            <img src={image} alt="twitter logo" className='obj-fit m-2' style={{ height: '45px', objectFit: 'contain' }} />
            <div className="body-card d-flex flex-column mx-4">
                <h3 className='text-dark fs-4'>{name}</h3>
                <p className='text-black-50'>{link}</p>
            </div>


        </Card>
    )
}

export default CardLink
