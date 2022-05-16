import React from 'react';
import LinkStyles from './styles';

const LinkArea = ({ name, tag, logo, handleClick }) => {
    return (
        <LinkStyles className="col d-flex flex-column justify-content-center align-items-center">
            <div onClick={() => handleClick(name, tag)} className="div-link">
                <img src={logo} alt={`${name} logo`} />
                <p className='fw-lighter text-black-50 text-center fs-6 mt-2'>{name}</p>
            </div>
        </LinkStyles>
    )
}

export default LinkArea;
