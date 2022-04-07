import axios from "axios";
import environment from "environment";
import { getToken } from "utils/jwt";

export function apiBase() {
    const instance = axios.create({ baseURL: environment.baseURL });
    instance.interceptors.request.use((config) => {
        const token = getToken();

        //Não enviar token nas rotas access e register
        if (config.url !== "/user/access" && config.url !== "/user/register")
            if (token) config.headers[`x-access-token`] = token;

        config.headers["Content-Type"] = "application/json";
        return config;
    });

    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (error.response !== undefined)
                if (error.response.status === 403) window.location.href = "/";
            return Promise.reject(error);
        }
    );
    return instance;
}
