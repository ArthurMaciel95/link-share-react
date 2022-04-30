import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import PageNotFound from 'pages/404';
import Register from 'pages/Register';
import ProfilePage from 'pages/Profile'
import PrivateRoute from 'Auth';
import EmailConfirm from 'pages/Confirmation/email';
import VisitorPage from 'pages/Visitor'
import ForgetPassword from 'pages/forget-password';
import ResetPassword from 'pages/reset-password'
import QrCode from 'pages/qrcode';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute >} />
            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path='/profile/qrcode' element={<PrivateRoute><QrCode /></PrivateRoute>} />
            <Route path="/register" element={<Register />} />
            <Route path="/email/confirm/:email&:uuid" element={<EmailConfirm />} />
            <Route path="/v/:nickname" element={<VisitorPage />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default Router;