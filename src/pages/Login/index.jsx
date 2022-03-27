import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shareLinkLogo from "assets/svg/logo-share-link.svg";
import { Link } from "react-router-dom";
import { Validation } from "utils/validation";
import * as Form from "components/form";
import { Container, Section } from "./styles";
import { toast } from "react-toastify";
import { UserServices } from "services/api/user";
import { setNewToken, logOut } from "utils/jwt";
import Loading from "components/loading";
import { encodePassword } from "utils/encrypt";
import ShowPasswordIcon from 'assets/svg/show-password.svg'
import HiddenPasswordIcon from 'assets/svg/hidden-password.svg'
import StayLogged from 'components/stay-logged'
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
const LoginPage = () => {
    const navigate = new useNavigate();
    const _ = new Validation();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;
    const [loading, setLoading] = useState(false);
    const user = new UserServices();
    const [ShowPassword, setShowPassword] = useState(false)
    const [checkbox, setCheckbox] = useState(false)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        logOut();
        stayLoggedVerify()
    }, []);

    const stayLoggedVerify = () => {

        if (localStorage.getItem('StayLogged')) {

            const { email, password, StayLogged } = JSON.parse(localStorage.getItem('StayLogged'))
            setFormData({ email, password })
            setCheckbox(StayLogged)
        }
    }

    const setStayLogged = () => {
        return checkbox ? localStorage.setItem('StayLogged', JSON.stringify({
            StayLogged: checkbox,
            email: email,
            password: password

        })) : localStorage.removeItem('StayLogged')

    }
    async function handleLogin(event) {
        event.preventDefault();

        try {
            setDisabled(false)
            if (_.isEmpty(formData))
                return toast.warning("Os campos não podem estar vazios");
            if (!_.isEmail(formData.email))
                return toast.warning("Este email não é valido");

            setStayLogged();
            setLoading(true);
            setDisabled(true)
            const response = await user.login({
                email,
                password: await encodePassword(password),
            });
            setDisabled(false)
            if (response.data.body.token) {
                setNewToken(response.data.body.token);
                return navigate("/home");
            }
        } catch (error) {
            setLoading(false);
            setDisabled(false)
            if (error.response !== undefined)
                return toast.error(error.response.data.message);
            toast.error("Servidor indisponível no momento.");
        }
    }
    const formChange = (event) =>
        setFormData({ ...formData, [event.target.name]: event.target.value });

    const handleCheckbox = () => {
        return false
    }

    return (
        <Container>
            {loading && <Loading />}
            <Section className="links">
                <div className="max-width hero-area">
                    <img src={shareLinkLogo} alt="logo share link" />
                    <h3>Finally, All my links in one place!</h3>
                </div>
                <div className="d-flex fs-6 links-terms">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Helps & Contacts</a>
                </div>
            </Section>
            <Section className="login">
                <Form.Container className="flex flex-column flex-center login-width">
                    <Form.GroupContainer>
                        <Form.Group>
                            <TextField

                                label="Email"
                                variant="outlined"
                                type="email"
                                name="email"
                                className="round"
                                onChange={formChange}
                                value={formData.email}
                            />
                        </Form.Group>
                        <Form.Group>
                            <TextField
                                label="Password"
                                variant="outlined"
                                className="round"
                                value={formData.password}
                                type={ShowPassword ? "text" : 'password'}
                                name="password"
                                onChange={formChange}
                            />

                            <img src={ShowPassword ? ShowPasswordIcon : HiddenPasswordIcon} alt="icone mostrar senha" id="password" onClick={() => setShowPassword(!ShowPassword)} />
                        </Form.Group>
                        <StayLogged checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
                        <a href="#" className="my-md-2 fs-7 text-reset">
                            Forget your password?
                        </a>
                        <Button onClick={handleLogin} variant="contained" color="primary" disabled={disabled} size="large" disableElevation fullWidth>
                            Log in
                        </Button >
                        <h2 className="text-center text-black-50 fs-3 py-4">
                            Don't have account?
                        </h2>
                        <Link
                            to="/register"
                            className="text-center text-primary-color fw-bolder"
                        >
                            Sign up Now!
                        </Link>
                    </Form.GroupContainer>
                </Form.Container>
            </Section>
        </Container>
    );
};

export default LoginPage;
