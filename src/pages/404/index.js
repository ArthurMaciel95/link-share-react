import React from 'react'
import notFoundIcon from 'assets/svg/404.svg'
import { NotFoundStyled } from './styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
const PageNotFound = () => {
    return (
        <NotFoundStyled>
            <img className='img-not-found' src={notFoundIcon} alt='not found image' />
            <Link to="/">
                <Button
                    onClick={(e) => openModal()}
                    variant="contained"
                    color="primary"
                    size="large"
                    disableElevation>
                    Back to Login page
                </Button>
            </Link>
        </NotFoundStyled>
    )
}

export default PageNotFound
