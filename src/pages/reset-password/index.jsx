import React, { useState } from 'react'
import { HeaderStyles, FormContainer } from './styles';
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import { toast } from "react-toastify";
import { Validation } from "utils/validation";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import IllustrationResetPassword from 'assets/svg/password-reset.svg'

const ResetPassword = () => {

    const [disabled, setDisabled] = useState(false)
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ password: '', repeatPassword: '' })
    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    const handlerSubmit = async (event) => {
        event.preventDefault()

        console.log(formData)
    }

    const formChange = (event) =>
        setFormData({ ...formData, [event.target.name]: event.target.value });


    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="primary" />
            </Backdrop>
            <HeaderStyles>

            </HeaderStyles>
            <FormContainer className='container'>

                <form className='col-md-6' onSubmit={handlerSubmit} method="POST">

                    <img src={IllustrationResetPassword} alt="letter and notebook" />
                    <h3>Create new Password</h3>
                    <p>Your new Password must be different from previous used passwords.</p>
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        name="password"
                        className="mb-2"
                        fullWidth
                        onChange={formChange}
                        value={formData.password}
                    />
                    <TextField
                        label="Repeat Password"
                        variant="outlined"
                        type="Password"
                        name="repeatPassword"
                        className="mb-2"
                        fullWidth
                        onChange={formChange}
                        value={formData.repeatPassword}
                    />
                    <Button
                        type='submit'
                        variant="contained"
                        color="primary"
                        disabled={disabled}
                        size="large"
                        disableElevation
                        fullWidth
                    >
                        RESET PASSWORD
                    </Button>



                </form>

            </FormContainer>
        </>
    )
}

export default ResetPassword