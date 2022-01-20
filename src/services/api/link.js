import { apiBase } from "./base";

export class LinksUrls {
    constructor() {
        this.api = apiBase();
    }
    /**
    * @param {object} createModel objeto com parametros para adicionar um link
    * @returns {promise} retorna uma promise
    */
    async linkCreate(type,url) {
        return this.api.post('/links/create', { type,url });
    }
    /**
    * @param {number} linkId id do link a ser deletado
    * @returns {promise} retorna uma promise
    */
    async unregister(linkId) {
        return this.api.delete(`/link/${linkId}`);
    }
}