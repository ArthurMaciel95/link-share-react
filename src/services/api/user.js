import { apiBase } from "./base";
import { FileBase } from "./file";

const formData = new FormData();
export class UserServices {
    constructor() {
        this.api = apiBase();
        this.apiFile = FileBase();
    }
    /**
     * @param {object} loginModel objeto com parametros para login
     * @returns {promise} retorna uma promise
     */
    async login(loginModel) {
        return this.api.post("/user/access", { ...loginModel });
    }
    /**
     * @param {object} createModel objeto com parametros para registro
     * @returns {promise} retorna uma promise
     */
    async register(registerModel) {
        return this.api.post("/user/register", { ...registerModel });
    }
    /**
     * @param {number} userId id do usuario a ser deletado
     * @returns {promise} retorna uma promise
     */
    async unregister(userId) {
        return this.api.delete(`/user/${userId}`);
    }

    async refresh(refreshModel) {
        return this.api.get(`/user/refresh`, { ...refreshModel });
    }

    async update(payload) {
        return this.api.put(`/user/update`, { ...payload });
    }
    /**
     *
     * @param {object} payload arquivo que será enviado.
     * @returns
     */
    async updatePicProfile(payload) {

        return this.apiFile.post(`/user/pic`, payload);
    }
    /**
     * @param {string} email a ser confirmado
     * @param {string} uuid identidificador unico da comfirmação
     * @returns {promise} retorna uma promise
     */
    async emailConfirm(email, uuid) {
        return this.api.post("/user/validate/", { email, uuid });
    }
    async visitor(nickname) {
        return this.api.get(`/user/visitor/${nickname}`);
    }
}
