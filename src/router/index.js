import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import PageNotFound from 'pages/404';
import Register from 'pages/Register';
import ProfilePage from 'pages/Profile'
import PrivateRoute from 'Auth';
import EmailConfirm from 'pages/Confirmation/email';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute >} />
            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="/register" element={<Register />} />
            <Route path="/email/confirm/:email&:uuid" element={<EmailConfirm />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default Router