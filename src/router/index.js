import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from 'pages/home';
import LoginPage from 'pages/login';
import PageNotFound from 'pages/404';
import Register from 'pages/register';
import ProfilePage from 'pages/profile'
import PrivateRoute from 'Auth';
import EmailValidate from 'pages/redirect/validate';
import VisitorPage from 'pages/visitor'
import ForgetPassword from 'pages/password/forgot';
import ResetPassword from 'pages/password/reset'
import QrCode from 'pages/qr-code';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute >} />
            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path='/profile/qr-code' element={<PrivateRoute><QrCode /></PrivateRoute>} />
            <Route path="/register" element={<Register />} />
            <Route path="/email/confirm/:email&:uuid" element={<EmailValidate />} />
            <Route path="/v/:nickname" element={<VisitorPage />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default Router;