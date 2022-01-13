import React, { useState } from "react";
import shareLinkLogo from "../../assets/svg/logo-share-link.svg";

import * as Buttons from "../../components/Buttons";
import * as Form from "../../components/Form";
import { Container, Section } from "./styles";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { userEndpoint } from "../../services/api/user";

const Register = () => {
    const [formData, setFormData] = useState({});
    const { name, nickname, email, password, confirm_password } = formData;
    const user = new userEndpoint();

    function formChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


    async function handleRegister() {
        console.log(formData)
        try {
            if (password != confirm_password)
                return toast.error("Senhas não coincidem");
            await user.register({
                name,
                nickname,
                email,
                password,
            });
            toast.success("Registrado com sucesso!");
            window.location.href = "/";
        } catch (error) {
            if (error.response != undefined)
                if (error.response.status === 400)
                    return toast.error("Usuário ja registrado!");

            toast.error("Registro falhou!");
        }
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
            <Section>
                <Form.Container className="flex flex-center register-width">
                    <Form.GroupContainer>
                        <Form.Group>
                            <input
                                type="text"
                                name="name"
                                className="round"
                                placeholder="Nome"
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type="text"
                                className="round"
                                name="nickname"
                                placeholder="Nome de usuário"
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type="text"
                                className="round"
                                name="email"
                                placeholder="Email"
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type="text"
                                name="password"
                                className="round"
                                placeholder="Senha"
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type="text"
                                name="confirm_password"
                                placeholder="Repita a senha"
                                className="round"
                                onChange={formChange}
                            />
                        </Form.Group>
                        <Buttons.Primary onClick={handleRegister}>
                            Register
                        </Buttons.Primary>
                        <Link to="/" className="my-md-2 fs-7 text-reset">
                            Eu já tenho uma conta.
                        </Link>
                    </Form.GroupContainer>
                </Form.Container>
            </Section>
        </Container>
    );
};

export default Register;
