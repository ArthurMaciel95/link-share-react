import { apiBase } from "./base";


export class userEndpoint {
    constructor() {
        this.api = apiBase();
    }
    /**
    * @returns {promise} retorna uma promise
    */
    async links() {
        return this.api.get('/user/links');
    }
    /**
     * @param {object} loginModel objeto com parametros para login
     * @returns {promise} retorna uma promise
     */
    async login(loginModel) {
        return this.api.get('/user/access', { ...loginModel });
    }
    /**
    * @param {object} createModel objeto com parametros para registro
    * @returns {promise} retorna uma promise
    */
    async create(createModel) {
        return this.api.post('/user/create', { ...createModel });
    }
    /**
     * @param {number} userId id do usuario a ser deletado
    * @returns {promise} retorna uma promise
    */
    async unregister(userId) {
        return this.api.delete(`/user/${userId}`);
    }
}