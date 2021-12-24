import React from 'react'
import './styles.css'

const CardLink = ({ name, image }) => {
    return (
        <div className="bg-white p-3 rounded shadow-sm d-flex mt-2">
            <img src={image} alt="twitter logo" className='obj-fit m-1' />
            <div className="body-card d-flex flex-column">
                <h3 className='text-dark fs-4'>{name}</h3>
                <p className='text-black-50'>twitter.com/ArthurRocha</p>
            </div>

        </div>
    )
}

export default CardLink
