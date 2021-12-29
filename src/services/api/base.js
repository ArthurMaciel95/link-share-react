import axios from "axios";
import enviroment from '../../environment'
import { getToken } from '../../utils/jwt';


export function apiBase() {
    const instance = axios.create({ baseURL: enviroment.API_URL });
    instance.interceptors.request.use((config) => {
        const token = getToken();
        if (token) config.headers[`Authorization`] = "Bearer " + token;
        config.headers['Content-Type'] = 'application/json';
        return config;
    });

    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response !== undefined)
            if (error.response.status === 403) //supondo que 403 seja o retorno de nao usuario autenticado
                window.location.href = '/'
        return Promise.reject(error);
    });
    return instance;
}