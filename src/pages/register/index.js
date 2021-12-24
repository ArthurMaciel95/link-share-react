import React from 'react'
import Button from '../../components/Button'
import shareLinkLogo from '../../assets/svg/logo-share-link.svg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="w-100 d-flex  h-100 ">
                <section className='bg-primary-color w-50 d-flex align-items-center justify-content-center   flex-column'>

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
                                <input type="text" className="border-rounder py-2 px-3 mb-md-3 text-muted" placeholder='Usuário' />
                                <input type="text" className="border-rounder py-2 px-3 mb-md-3 text-muted" placeholder='Nome' />
                                <input type="text" className="border-rounder py-2 px-3 mb-md-3 text-muted" placeholder='Senha' />
                                <input type="text" className="border-rounder py-2 px-3 mb-md-3 text-muted" placeholder='Repita a senha' />
                                <input type="text" className="border-rounder py-2 px-3 text-muted" placeholder='Senha' />
                                <Link to="/" className='my-md-2 fs-7 text-reset'>eu já tenho uma conta.</Link>
                                <Button value="Cadastrar" outline={false} />


                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Register
