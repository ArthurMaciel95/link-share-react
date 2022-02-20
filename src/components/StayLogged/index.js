import React from 'react'
import { StayLoggedStyle } from './styles'
const StayLogged = ({ checked, onChange }) => {
    return (
        <StayLoggedStyle>
            <input type="checkbox" name="" id="" onChange={onChange} checked={checked} />
            <p>Preencher dados automaticamente.</p>
        </StayLoggedStyle>
    )
}

export default StayLogged;