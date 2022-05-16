import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderStyles, FormContainer } from "./styles";
import emailForgetIllustration from "assets/svg/email-forget.svg";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppContext } from "context/AppContext";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const { loading, toggleLoading, passwordForgot, disabled } = useAppContext();
    const [formData, setFormData] = useState({ email: "" });
    const changeLoading = () => toggleLoading(!loading);
    const toLogin = () => navigate("/", { replace: true });
    const formChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handlerSubmit = (event) => {
        event.preventDefault();
        changeLoading();
        passwordForgot(formData);
    };

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
                <form className="col-md-6">
                    <img
                        src={emailForgetIllustration}
                        alt="letter and notebook"
                    />
                    <h3>Forget my password!</h3>
                    <p>
                        Enter your email below so we can send you a link to your
                        email with instructions to change your password.
                    </p>
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
                        variant="contained"
                        color="primary"
                        disabled={disabled}
                        size="large"
                        disableElevation
                        fullWidth
                        onClick={handlerSubmit}
                    >
                        SEND EMAIL
                    </Button>
                    <Link
                        component="button"
                        variant="body2"
                        color="primary"
                        onClick={toLogin}
                    >
                        Back to Login Page.
                    </Link>
                </form>
            </FormContainer>
        </>
    );
};

export default ForgetPassword;
