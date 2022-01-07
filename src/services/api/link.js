import { apiBase } from "./base";

export class linkEndpoint {
    constructor() {
        this.api = apiBase();
    }
    /**
    * @param {object} createModel objeto com parametros para adicionar um link
    * @returns {promise} retorna uma promise
    */
    async linkCreate(createModel) {
        return this.api.post('/links/create', { ...createModel });
    }
    /**
    * @param {number} linkId id do link a ser deletado
    * @returns {promise} retorna uma promise
    */
    async unregister(linkId) {
        return this.api.delete(`/link/${linkId}`);
    }
}