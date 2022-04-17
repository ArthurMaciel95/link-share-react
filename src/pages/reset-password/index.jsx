import React, { useState, useEffect } from 'react'
import { HeaderStyles, FormContainer } from './styles';
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import { toast } from "react-toastify";
import { Validation } from "utils/validation";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import IllustrationResetPassword from 'assets/svg/password-reset.svg';
import { UserServices } from "services/api/user";
import { encodePassword } from 'utils/encrypt';

const ResetPassword = () => {
    const _ = new Validation()
    const { search } = useLocation()
    const seachParams = new URLSearchParams(search);
    const user = new UserServices();
    const navigate = new useNavigate();
    const [disabled, setDisabled] = useState(false);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ password: '', repeatPassword: '' });
    const [loading, setLoading] = useState(false);



    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    const handlerSubmit = async (event) => {
        event.preventDefault()
        if (_.isEmpty(formData)) {
            return toast.warn('the fields not be empty!')
        }
        if (formData.password !== formData.repeatPassword) {
            return toast.warn('the password field and repeat password must be the same')
        }

        if (!_.isPassword(formData.password) && !_.isPassword(formData.repeatPassword)) {
            return toast.warn("The password must be at least 8 characters long and have an uppercase and lowercase letter between A-Z and a number between 0-9.!")
        }

        try {
            setOpen(true)
            await user.resetPassword(null, 2, {
                password: await encodePassword(formData.password),
                jwt: seachParams.get('jwt'),
                token: seachParams.get('tk')
            }).then(response => console.log(response)).catch(err => toast.error(err.response.data.message))
            setOpen(false)
            toast.success('password change with success!')
            navigate('/', { replace: true })

        } catch (err) {
            setOpen(false)
            toast.error(err.message)
        }

    }

    const formChange = (event) =>
        setFormData({ ...formData, [event.target.name]: event.target.value });

    useEffect(() => {
        console.log(seachParams)

        // verifica se tem a query JWT e TK na URL
        if (!seachParams.has('jwt') && !seachParams.has('tk')) {
            toast.warn('Attributes in url not found!')

            // volta para o login 
            return navigate("/", { replace: true });
        }


        // inicia a requisição para o back

    }, [])



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