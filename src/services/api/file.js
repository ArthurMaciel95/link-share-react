import axios from "axios";
import environment from "environment";
import { getToken } from "utils/jwt";

export function FileBase() {
    const instance = axios.create({ baseURL: environment.baseURL });
    instance.interceptors.request.use((config) => {
        const token = getToken();
        if (token) config.headers[`x-access-token`] = token;


        return config;
    });

    return instance;
}
