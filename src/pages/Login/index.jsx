import React, { useState, useEffect } from "react";
import shareLinkLogo from "../../assets/svg/logo-share-link.svg";
import { Link } from "react-router-dom";
import { Validation } from "../../utils/validation";
import * as Buttons from "../../components/Buttons";
import * as Form from "../../components/Form";
import { LoginContainer } from "../../components/Form";
import { Container, Section } from "./styles";
import { toast } from "react-toastify";

import { userEndpoint } from "../../services/api/user";
import { getPayloadJwt, setNewToken, logOut } from "../../utils/jwt";

const LoginPage = () => {
    const _ = new Validation();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;
    const user = new userEndpoint();


    useEffect(() => {
        logOut()
    })

    async function handleLogin(event) {
        event.preventDefault();
        try {
            if (_.isEmpty(formData))
                return toast.warning("Os campos não podem estar vazios");
            if (!_.isEmail(formData.email))
                return toast.warning("Este email não é valido");

            const response = await user.login({ ...formData });
            console.log(response)
            if (response.data.body.token) {
                setNewToken(response.data.body.token);
                window.location.href = `/home`;
            }
        } catch (error) {
            if (error.response != undefined)
                if (error.response.status == 406)
                    return toast.warning("E-mail não possui registro!");

            toast.error("Servidor indisponível no momento.");
        }
    }
    function formChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    return (
        <Container>
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
                                type="password"
                                name="password"
                                className="round"
                                placeholder="Senha"
                                onChange={formChange}
                            />
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
