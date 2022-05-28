import React, { useContext, useState } from "react";
import shareLinkLogo from "assets/svg/logo-share-link.svg";
import * as Buttons from "components/buttons";
import * as Form from "components/form";
import { Validation } from "utils/validation";
import { Container, Section } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserServices } from "services/user";
import { sha256 } from "utils/encrypt";
import Loading from "components/loading";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppContext } from "context";
import { useTranslation } from "react-i18next";

const Register = () => {
    let { t, i18n } = useTranslation()
    const navigate = useNavigate();
    const { loading, fields, toggleLoading, register } = useContext(AppContext);
    const [formData, setFormData] = useState({});
    const formChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    async function handleRegister(e) {
        e.preventDefault();
        register(formData);
    }
    const handlerClose = () => setLoading(false);
    function NavigateToLogin() {
        return navigate('/', { replace: true })
    }

    return (
        <Container>
            <Loading loading={loading} handlerClose={handlerClose} />
            <Section className="links">
                <div className="max-width">
                    <img src={shareLinkLogo} alt="logo share link" />
                    <h3>{t("register.subtitle")}</h3>
                </div>
                <div className="d-flex fs-6">
                    <a href="#">{t("register.terms")}</a>
                    <a href="#">{t("register.privacy")}</a>
                    <a href="#">{t("register.helps&contact")}</a>
                </div>
            </Section>
            <Section className="register">

                <div className="logo-mobile">
                    <img src={shareLinkLogo} alt="logo share link" />
                </div>
                <Form.Container className="flex flex-center register-width">

                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIcon />}
                        className="btn-back"
                        onClick={NavigateToLogin}
                    >
                        {t("register.back_to_login")}
                    </Button>

                    <Form.GroupContainer>
                        <Form.Group>
                            <TextField
                                label={t('register.name')}
                                variant="outlined"
                                type="text"
                                name="name"
                                className="round"
                                disabled={fields}
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <TextField
                                label={t('register.nickname')}
                                variant="outlined"
                                type="text"
                                name="nickname"
                                className="round"
                                disabled={fields}
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <TextField
                                label={t('register.email')}
                                variant="outlined"
                                type="email"
                                name="email"
                                className="round"
                                disabled={fields}
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <TextField
                                label={t('register.password')}
                                variant="outlined"
                                type="password"
                                name="password"
                                className="round"
                                disabled={fields}
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <TextField
                                label={t('register.confirm_password')}
                                variant="outlined"
                                type="password"
                                name="confirm_password"
                                className="round"
                                disabled={fields}
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Button
                            onClick={handleRegister}
                            variant="contained"
                            color="primary"
                            disabled={fields}
                            size="large"
                            fullWidth
                            disableElevation
                        >
                            {t("register.register")}
                        </Button>
                        <Link to="/" className="my-md-2 fs-7 text-reset">
                            {t("register.i_already_have_account")}
                        </Link>
                    </Form.GroupContainer>
                </Form.Container>
            </Section>
        </Container>
    );
};

export default Register;
