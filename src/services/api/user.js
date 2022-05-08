import { apiBase } from "./base";
import { FileBase } from "./file";


export class UserServices {
    static API = apiBase();

    constructor() {
        this.api = apiBase();
        this.apiFile = FileBase();
    }
    static async login(form) {
        return this.API.post("/user/access", { ...form });
    }

    async register(form) {
        return this.api.post("/user/register", { ...form });
    }

    async unregister(userId) {
        return this.api.delete(`/user/${userId}`);
    }

    static async refresh() {
        return this.API.get(`/user/refresh`);
    }

    async update(payload) {
        return this.api.put(`/user/update`, { ...payload });
    }

    async updatePicProfile(payload) {
        return this.apiFile.post(`/user/pic`, payload);
    }

    static async emailConfirm(email, uuid) {
        return this.API.post("/user/validate/", { email, uuid });
    }

    static async passwordForgot(email = null, step, validate = null) {
        // 1 or 2
        if (!step)
            return console.log('you need to pass the step')
        if (step === 1)
            return this.API.put(`/user/reset_password/1`, { email });
        if (step === 2 && !!validate.jwt && !!validate.token && !!validate.password)
            return this.API.put(`/user/reset_password/2?jwt=${validate.jwt}&tk=${validate.token}`, {
                password: validate.password
            });
    }
   static async visitor(nickname) {
        return this.API.get(`/user/visitor/${nickname}`);
    }
}
