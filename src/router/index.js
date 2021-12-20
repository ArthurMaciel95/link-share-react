import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import PageNotFound from '../pages/404';
const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default Router