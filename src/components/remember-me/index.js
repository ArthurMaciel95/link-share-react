import React from 'react'
import { RememberMeStyle } from './styles'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useTranslation } from "react-i18next";
const RememberMe = ({ checked, onChange }) => {
    let { t, i18n } = useTranslation()
    return (
        <FormGroup>
            <FormControlLabel control={<Switch />} label={t("login.remember_me")} onChange={onChange} checked={checked} />
        </FormGroup>
    )
}

export default RememberMe;