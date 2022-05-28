import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderStyles, FormContainer } from "./styles";
import { toast } from "react-toastify";
import { AppContext } from "context";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import IllustrationResetPassword from "assets/svg/password-reset.svg";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
    let { t } = useTranslation()
    const navigate = useNavigate()
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const { loading, toggleLoading, fields, passwordReset } = useContext(AppContext);
    const [formData, setFormData] = useState({ password: "", repeatPassword: "" });
    const formChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const changeLoading = () => toggleLoading(false);
    const handlerSubmit = async (event) => {
        event.preventDefault();
        passwordReset({
            password: formData.password,
            repeatPassword: formData.repeatPassword,
            jwt: searchParams.get("jwt"),
            token: searchParams.get("tk"),
        });
    };

    useEffect(() => {
        // verifica se tem a query JWT e TK na URL
        if (!searchParams.has("jwt") && !searchParams.has("tk")) {
            toast.warn("Attributes in url not found!");
            return navigate("/", { replace: true });
        }
    }, []);

    return (
        <>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
                onClick={changeLoading}
            >
                <CircularProgress color="primary" />
            </Backdrop>
            <HeaderStyles></HeaderStyles>
            <FormContainer className="container">
                <form
                    className="col-md-6"
                    onSubmit={handlerSubmit}
                    method="POST"
                >
                    <img
                        src={IllustrationResetPassword}
                        alt="letter and notebook"
                    />
                    <h3>{t('reset_password.title')}</h3>
                    <p>
                        {t('reset_password.subtitle')}
                    </p>
                    <TextField
                        label={t('reset_password.password')}
                        variant="outlined"
                        type="password"
                        name="password"
                        className="mb-2"
                        fullWidth
                        disabled={fields}
                        onChange={formChange}
                        value={formData.password}
                    />
                    <TextField
                        label={t('reset_password.repeat_password')}
                        variant="outlined"
                        type="Password"
                        name="repeatPassword"
                        className="mb-2"
                        fullWidth
                        onChange={formChange}
                        disabled={fields}
                        value={formData.repeatPassword}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={fields}
                        size="large"
                        disableElevation
                        fullWidth
                    >
                        {t('reset_password.button')}
                    </Button>
                </form>
            </FormContainer>
        </>
    );
};

export default ResetPassword;
