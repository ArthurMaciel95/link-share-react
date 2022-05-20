export class Validation {
    static isEmpty(form) {
        return Object.values(form).some(value => value === '')
    }

    static isEmail(email) {
        var expreg = /^([a-zA_Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/gi;
        if (!email || !expreg.test(email)) return false
        return true
    }

    static isPassword(password) {
        if (!password || RegExp("^([^a-z]*|[^A-Z]*|[^0-9]*|.{0,7})$").test(password))
            return false;
        else
            return true;
    }
    static addHttps(link) {
        return this.hasHttps(link) ? link : `https://${link}`

    }
    static hasHttps(link) {
        return link.startsWith('https')
    }
    static isUrl(link) {
        let expreg = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        return expreg.test(link)
    }
}




