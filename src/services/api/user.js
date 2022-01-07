import { apiBase } from "./base";


export class userEndpoint {
    constructor() {
        this.api = apiBase();
    }
    /**
     * @param {object} loginModel objeto com parametros para login
     * @returns {promise} retorna uma promise
     */
    async login(loginModel) {
        return this.api.post('/user/access', { ...loginModel });
    }
    /**
    * @param {object} createModel objeto com parametros para registro
    * @returns {promise} retorna uma promise
    */
    async register(registerModel) {
        return this.api.post('/user/register', { ...registerModel });
    }
    /**
    * @param {number} userId id do usuario a ser deletado
    * @returns {promise} retorna uma promise
    */
    async unregister(userId) {
        return this.api.delete(`/user/${userId}`);
    }
}