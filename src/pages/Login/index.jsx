import React, { useState } from "react";
import "./styles.css";
import shareLinkLogo from "../../assets/svg/logo-share-link.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import { userEndpoint } from "../../services/api/user";
const LoginPage = () => {
    const [formData, setFormData] = useState({});
    const { email, password } = formData;
    const user = new userEndpoint();

    async function handleLogin(event) {
        event.preventDefault();
        try {
            console.log(formData);
            //const res = await user.login({ ...formData });

            //res.data. dado retornado
        } catch (error) {
            //Login falhou
        }
    }
    function formChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    return (
        <div id="login">
            <section className="sections">
                <div className="links-section">
                    <div className="row text-center" >
                        <div className="col-12">
                            <h1 className="text-light mb-md-4">
                                <img
                                    src={shareLinkLogo}
                                    alt="logo share link"
                                />
                            </h1>
                            <h3 className="text-light fs-4">
                                Finalmente, Todos os meus links em um só lugar
                            </h3>
                        </div>
                    </div>
                    <div className="d-flex fs-6 mt-md-5">
                        <a href="#" className="px-3">
                            Terms
                        </a>
                        <a href="#" className="px-3">
                            Privacy
                        </a>
                        <a href="#" className="px-3">
                            Helps & Contacts
                        </a>
                    </div>
                </div>
            </section>
            <section className="sections">
                <div className="login-section">
                    <div className="row">
                        <div className="d-flex flex-column">
                            <input
                                type="email"
                                name="email"
                                className="login-inp"
                                placeholder="Email"
                                onChange={formChange}
                            />
                            <input
                                type="password"
                                name="password"
                                className="login-inp"
                                placeholder="Senha"
                                onChange={formChange}
                            />
                            <a href="#" className="my-md-2 fs-7 text-reset">
                                Esqueceu a senha?
                            </a>
                            <Button
                                type="button"
                                value="Entrar"
                                outline={false}
                                handlerButton={handleLogin}
                            />
                            <h2 className="text-center text-black-50 fs-3 py-4">
                                Não tem uma conta ainda?
                            </h2>
                            <Link
                                to="/register"
                                className="text-center text-primary-color fw-bolder"
                            >
                                Cadastre-se agora.
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
