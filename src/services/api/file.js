import axios from "axios";
import environment from "environment";
import { getToken } from "utils/jwt";

export function FileBase() {
    const instance = axios.create({ baseURL: environment.baseUrl });
    instance.interceptors.request.use((config) => {
        const token = getToken();
        if (token) config.headers[`x-access-token`] = token;
        config.headers["Content-Type"] = "multipart/form-data";

        return config;
    });

    return instance;
}
