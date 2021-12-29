import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import PageNotFound from '../pages/404';
import Register from '../pages/register';
import { PrivateRoute } from '../Auth';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute >} />
            {/* <Route path="/profile/:id" element={<PrivateRoute><Profile /></PrivateRoute>} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}