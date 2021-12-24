import React from "react";
import { Route, Redirect } from 'react-router-dom'
import jwtVerify from './utils/jwt'
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => jwtVerify.isAuthenticated() && !jwtVerify.isTokenExpired(jwtVerify.getToken()) ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            )}
        />
    )
}

export default PrivateRoute;