import React from "react";
import { Route, Redirect, Navigate, Location } from 'react-router-dom'
import { isAuthenticated, isTokenExpired, getToken } from '../utils/jwt'


const PrivateRoute = ({ children }) => {

    let isAuthenticated = isAuthenticated() && !isTokenExpired(getToken())

    if (isAuthenticated) {
        return children
    }

    return <Navigate to="/" />

}

export default PrivateRoute;