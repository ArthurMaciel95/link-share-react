import React from 'react'
import './styles.css'
import shareLinkLogo from '../../assets/svg/logo-share-link.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
const LoginPage = () => {
    return (
        <>
            <div className="w-100 d-flex  h-100 ">
                <section className='bg-primary-color w-50 d-flex align-items-center justify-content-center flex-column '>

                    <div className="row ">
                        <div className="col-8">
                            <h1 className='text-light mb-md-4'>
                                <img src={shareLinkLogo} alt="logo share link" />
                            </h1>
                            <h3 className='text-light fs-4'>Finalmente, Todos os meus links
                                em um só lugar</h3>
                        </div>
                    </div>
                    <div className="d-flex fs-6 mt-md-5">
                        <a href="#" className='px-3 text-decoration-none text-white'>Terms</a>
                        <a href="#" className='px-3 text-decoration-none text-white' >Privacy</a>
                        <a href="#" className='px-3 text-decoration-none text-white'>helps & Contacts</a>
                    </div>


                </section>
                <section className='w-50 '>
                    <div className="d-flex h-100 justify-content-center align-items-center">
                        <div className="row">
                            <div className="d-flex flex-column">
                                <input type="text" className="border-rounder py-2 px-3 mb-md-3 text-muted" placeholder='Email' />
                                <input type="text" className="border-rounder py-2 px-3 text-muted" placeholder='Senha' />
                                <a href="#" className='my-md-2 fs-7 text-reset'>esqueceu a senha?</a>
                                <Button value="Entrar" outline={false} />
                                <h2 className='text-center text-black-50 fs-3 py-4'>Não tem uma conta ainda?</h2>
                                <Link to="/register" className='text-center text-primary-color fw-bolder'>Cadastre-se agora.</Link>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default LoginPage
