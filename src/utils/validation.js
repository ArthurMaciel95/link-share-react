export class Validation {

    isEmpty(formData) {
        return Object.values(formData).some(value => value === '')
    }

    isEmail(email) {
        var expreg = /^([a-zA_Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/gi;
        if (!email || !expreg.test(email)) {
            return false
        }
        return true
    }

    isPassword(password) {
        if (!password || RegExp("^([^a-z]*|[^A-Z]*|[^0-9]*|.{0,7})$").test(password))
            return false;
        else
            return true;
    }
    addHttps(link) {
        return this.hasHttps(link) ? link : `https://${link}`

    }
    hasHttps(link) {
        return link.startsWith('https')
    }
}




