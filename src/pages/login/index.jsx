import React, { useState, useEffect } from "react";
import shareLinkLogo from "assets/svg/logo-share-link.svg";
import { Link } from "react-router-dom";
import * as Form from "components/form";
import { Container, Section } from "./styles";
import { toast } from "react-toastify";
import Loading from "components/loading";
import ShowPasswordIcon from "assets/svg/show-password.svg";
import HiddenPasswordIcon from "assets/svg/hidden-password.svg";
import StayLogged from "components/stay-logged";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

import { useAppContext } from "context/AppContext";

const LoginPage = () => {
    let { t, i18n } = useTranslation()
    const { login, logOut, fields, loading } = useAppContext();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;
    const [ShowPassword, setShowPassword] = useState(false);
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        logOut();
        rememberVerify();
    }, []);

    const rememberVerify = () => {
        if (localStorage.getItem("StayLogged")) {
            const { email, password, StayLogged } = JSON.parse(
                localStorage.getItem("StayLogged")
            );
            setFormData({ email, password });
            setCheckbox(StayLogged);
        }
    };
    const remember = () => {
        return checkbox
            ? localStorage.setItem(
                "StayLogged",
                JSON.stringify({
                    StayLogged: checkbox,
                    email: email,
                    password: password,
                })
            )
            : localStorage.removeItem("StayLogged");
    };

    async function handleLogin(event) {
        event.preventDefault();
        remember();
        login(formData);
    }

    const formChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleCheckbox = () => { return false; }
    const handlerClose = () => setLoading(false);

    return (
        <Container>
            <Loading loading={loading} handlerClose={handlerClose} />
            <Section className="links">
                <div className="max-width hero-area">
                    <img src={shareLinkLogo} alt="logo share link" />
                    <h3>{t('login.subtitle')}</h3>
                </div>
                <div className="d-flex fs-6 links-terms">
                    <a href="#">{t('login.terms')}</a>
                    <a href="#">{t('login.privacy')}</a>
                    <a href="#">{t('login.helps&contact')}</a>
                </div>
            </Section>
            <Section className="login">
                <div className="logo-mobile">
                    <img src={shareLinkLogo} alt="logo share link" />
                </div>
                <h4 className="login-mobile-hero text-center ">
                    {t('your platform to share links!')}
                </h4>
                <Form.Container className="flex flex-column flex-center login-width">
                    <Form.GroupContainer>
                        <Form.Group>
                            <TextField
                                label={t('login.email')}
                                variant="outlined"
                                type="email"
                                name="email"
                                className="round"
                                disabled={fields}
                                onChange={formChange}
                                value={formData.email}
                            />
                        </Form.Group>
                        <Form.Group>
                            <TextField
                                label={t('login.password')}
                                variant="outlined"
                                className="round"
                                disabled={fields}
                                value={formData.password}
                                type={ShowPassword ? "text" : "password"}
                                name="password"
                                onChange={formChange}
                            />
                            <img
                                src={
                                    ShowPassword
                                        ? ShowPasswordIcon
                                        : HiddenPasswordIcon
                                }
                                alt="icon mostrar senha"
                                id="password"
                                onClick={() => setShowPassword(!ShowPassword)}
                            />
                        </Form.Group>
                        <StayLogged
                            checked={checkbox}
                            onChange={(e) => setCheckbox(!checkbox)}
                        />
                        <Link
                            to="/forget-password"
                            className="my-md-2 fs-7 text-reset"
                        >
                            {t('login.forget_your_password?')}
                        </Link>
                        <Button
                            onClick={handleLogin}
                            variant="contained"
                            color="primary"
                            disabled={fields}
                            size="large"
                            disableElevation
                            fullWidth
                        >
                            {t('login.log_in')}
                        </Button>
                        <h2 className="text-center text-black-50 fs-3 py-4">
                            {t("login.don't_have_account?")}
                        </h2>
                        <Link
                            to="/register"
                            className="text-center text-primary-color fw-bolder"
                        >
                            {t("login.sign_up_now!")}
                        </Link>
                    </Form.GroupContainer>
                </Form.Container>
            </Section>
        </Container>
    );
};

export default LoginPage;
