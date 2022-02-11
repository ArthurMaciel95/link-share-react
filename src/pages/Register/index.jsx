import React, { useState } from "react";
import shareLinkLogo from "assets/svg/logo-share-link.svg";
import * as Buttons from "components/Buttons";
import * as Form from "components/Form";
import { Validation } from "utils/validation";
import { Container, Section } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserServices } from "services/api/user"
import { encodePassword } from "utils/encrypt";
import Loading from "components/Loading";

const Register = () => {
    const _ = new Validation();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const { name, nickname, email, password, confirm_password } = formData;
    const userService = new UserServices();
    const formChange = (event) =>  setFormData({ ...formData, [event.target.name]: event.target.value });
    
    async function handleRegister(event) {
        event.preventDefault();
        try {
            setLoading(true);
            if (!_.isPassword(password))
                return toast.error("A senha deve ter no mínimo 8 caracteres e possuir uma maiúscula e uma minúscula entre A-Z e um numero entre 0-9.!")
            if (password !== confirm_password)
                return toast.error("Senhas não coincidem");
            await userService.register({
                name,
                nickname,
                email,
                password: await encodePassword(password),
            });
            toast.success("Registrado com sucesso!");
            return navigate('/')
        } catch (error) {
            if (error.response !== undefined)
                return toast.error(error.response.data.message);
            toast.error("Registro falhou!");
            setLoading(false);
        }
    }
    
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
                                type="email"
                                className="round"
                                name="email"
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
                        <Form.Group>
                            <input
                                type="password"
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
        </Container >
    );
};

export default Register;
