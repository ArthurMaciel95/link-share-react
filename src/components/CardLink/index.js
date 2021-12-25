import React from 'react'


const CardLink = ({ name, image }) => {
    return (
        <div className="bg-white p-3 rounded shadow-sm d-flex mt-2">
            <img src={image} alt="twitter logo" className='obj-fit m-2' style={{ height: '45px', objectFit: 'contain' }} />
            <div className="body-card d-flex flex-column mx-4">
                <h3 className='text-dark fs-4'>{name}</h3>
                <p className='text-black-50'>twitter.com/ArthurRocha</p>
            </div>

        </div>
    )
}

export default CardLink
