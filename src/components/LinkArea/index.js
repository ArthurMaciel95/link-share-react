import React from 'react'

const LinkArea = ({ name, logo }) => {
    return (
        <div className="col d-flex flex-column justify-content-center align-items-center ">
            <img src={logo} alt="facebook logo" />
            <p className='fw-normal fs-5 mt-sm-2'>{name}</p>
        </div>
    )
}

export default LinkArea
