import React from "react";
import shareLinkLogo from "../../assets/svg/logo-share-link.svg";

import * as Buttons from "../../components/Buttons";
import * as Form from "../../components/Form";
import { Container, Section } from "./styles";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
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
                                className="round"
                                placeholder="Nome"
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type="text"
                                className="round"
                                placeholder="Email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type="text"
                                className="round"
                                placeholder="Senha"
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                type="text"
                                placeholder="Repita a senha"
                                className="round"
                            />
                        </Form.Group>
                        <Buttons.Primary>Register</Buttons.Primary>
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
