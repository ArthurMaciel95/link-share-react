import axios from "axios";
import environment from "environment";
import enviroment from 'environment'
import { getToken } from 'utils/jwt';

/**
 * DEPENDENDO O SCRIPT QUE VOCÊ RODAR A APLICAÇÃO TERÁ 2 AMBIENTES DIFIRENTES. (NPM START OU NPM RUN DEV)
 * 
 */
const isProduction = () => process.env.REACT_APP_ENV === 'production' ? environment.URL_PRODUCTION : enviroment.baseURL;


export function apiBase() {
    const instance = axios.create({ baseURL: isProduction() });
    instance.interceptors.request.use((config) => {
        const token = getToken();

        //Não enviar token nas rotas access e register
        if (config.url !== "/user/access" && config.url !== "/user/register")
            if (token) config.headers[`x-access-token`] = token;

        config.headers['Content-Type'] = 'application/json';
        return config;
    });

    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response !== undefined)
            if (error.response.status === 403) //supondo que 403 seja o retorno de usuario não autenticado
                window.location.href = '/'
        return Promise.reject(error);
    });
    return instance;
}