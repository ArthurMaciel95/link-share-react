import { API } from "./axios";

export class LinksServices {
    static requests = API([["Content-Type", "application/json"]]);
    static async create(form) {
        return this.requests.post('/link/create', { form });
    }
    static async delete(linkId) {
        return this.requests.delete(`/link/${linkId}/*`);
    }

    static async downloadCSV() {
        return this.requests.get('/link/report/spreadsheet')
    }
}