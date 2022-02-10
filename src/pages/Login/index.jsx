import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shareLinkLogo from "assets/svg/logo-share-link.svg";
import { Link } from "react-router-dom";
import { Validation } from "utils/validation";
import * as Buttons from "components/Buttons";
import * as Form from "components/Form";
import { Container, Section } from "./styles";
import { toast } from "react-toastify";
import { UserServices } from "services/api/user";
import { setNewToken, logOut } from "utils/jwt";
import Loading from "components/Loading";
import { encodePassword } from "utils/encrypt";
import ShowPasswordIcon from 'assets/svg/show-password.svg'
import HiddenPasswordIcon from 'assets/svg/hidden-password.svg'

const LoginPage = () => {
    const navigate = new useNavigate();
    const _ = new Validation();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;
    const [loading, setLoading] = useState(false);
    const user = new UserServices();
    const [ShowPassword, setShowPassword] = useState(false)
    useEffect(logOut, []);
    async function handleLogin(event) {
        event.preventDefault();
        try {
            if (_.isEmpty(formData))
                return toast.warning("Os campos não podem estar vazios");
            if (!_.isEmail(formData.email))
                return toast.warning("Este email não é valido");
            setLoading(true);
            const response = await user.login({
                email,
                password: await encodePassword(password),
            });
            if (response.data.body.token) {
                setNewToken(response.data.body.token);
                return navigate("/home");
            }
        } catch (error) {
            alert(error)
            setLoading(false);
            if (error.response !== undefined)
                return toast.error(error.response.data.message);
            toast.error("Servidor indisponível no momento.");
        }
    }
    const formChange = (event) =>
        setFormData({ ...formData, [event.target.name]: event.target.value });

    return (
        <Container>
            {loading && <Loading />}
            <Section className="links">
                <div className="max-width">
                    <img src={shareLinkLogo} alt="logo share link" />
                    <h3>Finalmente, Todos os meus links em um só lugar</h3>
                </div>
                <div className="d-flex fs-6">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Helps & Contacts</a>
                </div>
            </Section>
            <Section className="login">
                <Form.Container className="flex flex-column flex-center login-width">
                    <Form.GroupContainer>
                        <Form.Group>
                            <input
                                type="email"
                                name="email"
                                className="round"
                                placeholder="Email"
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type={ShowPassword ? "text" : 'password'}
                                name="password"
                                className="round"
                                placeholder="Senha"
                                onChange={formChange}
                            />
                            <img src={ShowPassword ? ShowPasswordIcon : HiddenPasswordIcon} alt="icone mostrar senha" id="password" onClick={() => setShowPassword(!ShowPassword)} />
                        </Form.Group>
                        <a href="#" className="my-md-2 fs-7 text-reset">
                            Esqueceu a senha?
                        </a>
                        <Buttons.Primary onClick={handleLogin}>
                            Entrar
                        </Buttons.Primary>
                        <h2 className="text-center text-black-50 fs-3 py-4">
                            Não tem uma conta ainda?
                        </h2>
                        <Link
                            to="/register"
                            className="text-center text-primary-color fw-bolder"
                        >
                            Cadastre-se agora.
                        </Link>
                    </Form.GroupContainer>
                </Form.Container>
            </Section>
        </Container>
    );
};

export default LoginPage;
