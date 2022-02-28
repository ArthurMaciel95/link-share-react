import React from 'react'
import notFoundIcon from 'assets/svg/404.svg'
import {NotFoundStyled} from './styles';
import { Link } from 'react-router-dom';
import * as Buttons from 'components/Buttons'
const PageNotFound = () => {
    return (
        <NotFoundStyled>
            <img className='img-not-found' src={notFoundIcon} alt='not found image'/>
            <Link to="/">
                                        <Buttons.Primary>
                                            Go to login
                                        </Buttons.Primary>
                                    </Link>
        </NotFoundStyled>
    )
}

export default PageNotFound
