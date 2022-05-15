import { API } from "./axios";

export class LinksServices {
    static requests = API([["Content-Type", "application/json"]]);
    static async create(type, url, tag) {
        return this.requests.post('/link/create', { type, url, tag });
    }
    static async delete(linkId) {
        return this.requests.delete(`/link/${linkId}/*`);
    }
}