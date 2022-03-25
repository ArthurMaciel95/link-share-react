import React from 'react'
import { StayLoggedStyle } from './styles'
const StayLogged = ({ checked, onChange }) => {
    return (
        <StayLoggedStyle>
            <input type="checkbox" name="" id="" onChange={onChange} checked={checked} />
            <p>Remember me </p>
        </StayLoggedStyle>
    )
}

export default StayLogged;