import React from 'react'
import { StayLoggedStyle } from './styles'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const StayLogged = ({ checked, onChange }) => {
    return (
        <FormGroup>
            <FormControlLabel control={<Switch />} label="Remember me" onChange={onChange} checked={checked} />
        </FormGroup>
    )
}

export default StayLogged;