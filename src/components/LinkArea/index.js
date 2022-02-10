import React from 'react'
import LinkStyles from './styles'

const LinkArea = ({ name, logo }) => {
    return (
        <LinkStyles className="col d-flex flex-column justify-content-center align-items-center ">
            <img src={logo} alt="facebook logo" />
            <p className='fw-normal fs-5 mt-sm-2'>{name}</p>
        </LinkStyles>
    )
}

export default LinkArea
