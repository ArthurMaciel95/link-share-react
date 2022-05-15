import React, { useState } from "react";
import shareLinkLogo from "assets/svg/logo-share-link.svg";
import * as Buttons from "components/buttons";
import * as Form from "components/form";
import { Validation } from "utils/validation";
import { Container, Section } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserServices } from "services/api/user";
import { encodePassword } from "utils/encrypt";
import Loading from "components/loading";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
    const _ = new Validation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const { name, nickname, email, password, confirm_password } = formData;
    const userService = new UserServices();
    const [disabled, setDisabled] = useState(false);

    const formChange = (event) =>
        setFormData({ ...formData, [event.target.name]: event.target.value });


    function NavidateToLogin() {
        return navigate('/', { replace: true })
    }

    async function handleRegister(event) {
        event.preventDefault();
        try {
            setDisabled(false);
            if (!_.isPassword(password))
                return toast.error(
                    "The password must be at least 8 characters long and have an uppercase and lowercase letter between A-Z and a number between 0-9.!"
                );
            if (password !== confirm_password)
                return toast.error("Passwords don't match");
            setLoading(true);
            setDisabled(true);
            if (nickname.indexOf("@") === 0) nickname.replace("@", "");
            await userService.register({
                name,
                nickname,
                email,
                password: await encodePassword(password),
            });
            setDisabled(false);
            setLoading(false);
            toast.success("Successfully registered");
            return navigate("/", { replace: true });
        } catch (error) {
            setLoading(false);
            setDisabled(false);
            if (error.response !== undefined)
                return toast.error(error.response.data.message);
            toast.error("registration failed!");
        }
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
                        onClick={NavidateToLogin}
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
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Button
                            onClick={handleRegister}
                            variant="contained"
                            color="primary"
                            disabled={disabled}
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
