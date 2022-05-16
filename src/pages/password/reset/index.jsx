import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeaderStyles, FormContainer } from "./styles";
import { toast } from "react-toastify";
import { useAppContext } from "context/AppContext";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import IllustrationResetPassword from "assets/svg/password-reset.svg";

const ResetPassword = () => {
    const searchParams = new URLSearchParams(search);
    const { loading, toggleLoading, fields, passwordReset } = useAppContext();
    const { search } = useLocation();
    const [formData, setFormData] = useState({ password: "", repeatPassword: ""});
    const formChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const changeLoading = () => toggleLoading(false);
    const handlerSubmit = async (event) => {
        event.preventDefault();
        passwordReset({
            password: formData.password,
            repeatPassword: formData.repeatPassword,
            jwt: searchParams.get("jwt"),
            token: searchParams.get("token"),
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
                    <h3>Create new Password</h3>
                    <p>
                        Your new Password must be different from previous used
                        passwords.
                    </p>
                    <TextField
                        label="Password"
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
                        label="Repeat Password"
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
                        RESET PASSWORD
                    </Button>
                </form>
            </FormContainer>
        </>
    );
};

export default ResetPassword;
