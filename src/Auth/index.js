import React from "react";
import { Navigate } from 'react-router-dom'
import { isAuthenticated, isTokenExpired, getToken } from 'utils/jwt'

const PrivateRoute = ({ children }) => {
    if (isAuthenticated() && !isTokenExpired(getToken())) return children
    return <Navigate to="/" />
}
export default PrivateRoute