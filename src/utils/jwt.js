import { decoded, encoded } from "./buffer";


/**
 * @param {string} token é o jwt que está sendo retornado na requisição do webservice
 * @param {string} name é o token que está no localStorage
 * 
 * @returns {boolean} retorna true se for igual.
 */
export const isEqual = (token, name) => {
    if (typeof name !== 'string')
        throw new Error('name need to be string')

    if (!localStorage.getItem(name) && !localStorage.getItem(name) !== token)
        return true;
}

/**
 *  Verifica se o token expirou.
 * @param {string} token insira o token JWT
 * @returns {boolean} retorna um boleano.
 */
export const isTokenExpired = token => Date.now() >= JSON.parse(decoded(token.split('.')[1], 'utf-8')).exp * 1000

/**
 * Resgata o token jwt do localStorage.
 * @returns {string}
 */
export const getToken = () => {
    if (!localStorage.getItem('jwt_token'))
        return null;
    return JSON.parse(localStorage.getItem('jwt_token'))
}

export const getPayloadJwt = () => {
    const token = JSON.parse(localStorage.getItem('jwt_token'))
    const payload = token.split('.')[1];
    const decoded = decoded(payload, 'utf-8');
    return decoded
}

/**
 *  Verifica se existe token no localstorage.
 * @returns boolean
 */
export const isAuthenticated = () => {
    return localStorage.getItem('jwt_token') !== null;
}

export const logOut = () => {
    return localStorage.removeItem('jwt_token');
}
/**
 * 
 * @param {string} token chave que é enviada quando logamos.
 */
export const setNewToken = (token) => {
    return localStorage.setItem('jwt_token', JSON.stringify(token));
}



