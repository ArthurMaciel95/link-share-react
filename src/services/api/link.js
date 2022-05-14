import { apiBase } from "./base";

export class LinksServices {
    static API = apiBase();

    static async create(type, url, tag) {
        return this.api.post('/link/create', { type, url, tag });
    }

    static async delete(linkId) {
        return this.api.delete(`/link/${linkId}/*`);
    }
}