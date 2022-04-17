import React, { useState } from 'react'
import { HeaderStyles, FormContainer } from './styles';
import { UserServices } from "services/api/user";
import emailForgetIlustration from 'assets/svg/email-forget.svg'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import { toast } from "react-toastify";
import { Validation } from "utils/validation";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const ForgetPassword = () => {
    const user = new UserServices();
    const navigate = new useNavigate();
    const [disabled, setDisabled] = useState(false)
    const _ = new Validation();

    const [formData, setFormData] = useState({ email: '' })
    const changeToLogin = () => {
        navigate("/", { replace: true });
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const handlerSubmit = async (event) => {
        event.preventDefault();
        try {
            if (_.isEmpty(formData))
                return toast.warning("Os campos não podem estar vazios");
            if (!_.isEmail(formData.email))
                return toast.warning("Este email não é valido");

            handleToggle()
            await user.resetPassword(formData.email, 1, null)

            toast.success('Email send with success!')
            handleClose()
            setOpen(false)
        } catch (err) {
            handleClose()
            console.log(err)
        }

    }

    const formChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });

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

                <form onSubmit={handlerSubmit} className='col-md-6' method='POST' id="forget-password">

                    <img src={emailForgetIlustration} alt="letter and notebook" />
                    <h3>Forget my password!</h3>
                    <p>Enter your email below so we can send you a link to your email with instructions to change your password.</p>
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        className="round"
                        fullWidth
                        disabled={disabled}
                        onChange={formChange}
                        value={formData.email}
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
                        SEND EMAIL
                    </Button>

                    <Link
                        component="button"
                        variant="body2"
                        color="primary"
                        onClick={(e) => changeToLogin()}
                    >
                        Back to Login Page.
                    </Link>

                </form>

            </FormContainer>
        </>
    )
}

export default ForgetPassword