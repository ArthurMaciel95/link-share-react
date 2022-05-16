import React, { useState } from "react";
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
import { useAppContext } from "context/AppContext";

const Register = () => {
    const navigate = useNavigate();
    const { loading, fields, toggleLoading, register } = useAppContext();
    const [formData, setFormData] = useState({});
    const formChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    async function handleRegister(e) {
        e.preventDefault();
        register(formData);
    }

    function NavigateToLogin() {
        return navigate('/', { replace: true })
    }

    return (
        <Container>
            {loading && <Loading />}
            <Section className="links">
                <div className="max-width">
                    <img src={shareLinkLogo} alt="logo share link" />
                    <h3>Finally, All my links in one place!</h3>
                </div>
                <div className="d-flex fs-6">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Helps & Contacts</a>
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
                        Back to Login
                    </Button>

                    <Form.GroupContainer>
                        <Form.Group>
                            <TextField
                                label="Name"
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
                                label="Nickname"
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
                                label="Email"
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
                                label="Password"
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
                                label="Confirm Password"
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
                            Register
                        </Button>
                        <Link to="/" className="my-md-2 fs-7 text-reset">
                            I already have an account.
                        </Link>
                    </Form.GroupContainer>
                </Form.Container>
            </Section>
        </Container>
    );
};

export default Register;
