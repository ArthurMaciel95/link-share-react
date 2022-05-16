import { API } from "./axios";

export class UserServices {
    static requests = API([["Content-Type", "application/json"]]);
    static files = API([["Content-Type", "multipart/form-data"]]);

    static async login(form) {
        return this.requests.post("/user/access", { ...form });
    }

    static async register(form) {
        return this.requests.post("/user/register", { ...form });
    }

    static async refresh() {
        return this.requests.get(`/user/refresh`);
    }

    static async update(payload) {
        return this.requests.put(`/user/update`, { ...payload });
    }

    static updatePicProfile(payload) {
        return this.files.post(`/user/pic`, payload);
    }

    static async emailConfirm(email, uuid) {
        return this.requests.post("/user/validate/", { email, uuid });
    }

    static async passwordForgot(email = null, step, validate = null) {
        if (!step) return new Error("step is required is passwordForgot");
        if (step === 1) return this.requests.put(`/user/reset_password/1`, { email });
        if (step === 2 && !!validate.jwt && !!validate.token && !!validate.password)
            return this.requests.put(`/user/reset_password/2?jwt=${validate.jwt}&tk=${validate.token}`, {
                password: validate.password
            });
    }
    static async visitor(nickname) {
        return this.requests.get(`/user/visitor/${nickname}`);
    }
}
