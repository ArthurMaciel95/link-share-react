import { apiBase } from "./base";

export class LinksUrls {
    constructor() {
        this.api = apiBase();
    }
    /**
    * @param {object} createModel objeto com parametros para adicionar um link
    * @returns {promise} retorna uma promise
    */
    async linkCreate(type, context, tag) {
        return this.api.post('/link/create', { type, context, tag });
    }
    /**
    * @param {number} linkId id do link a ser deletado
    * @returns {promise} retorna uma promise
    */
    async unregister(linkId) {
        return this.api.delete(`/link/${linkId}/*`);
    }

    async downloadCSV() {
        return this.api.get('/link/report/spreadsheet')
    }
}