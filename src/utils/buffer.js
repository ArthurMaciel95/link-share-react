export const buffer = {
    /**
     * @param {string} value valor que você vai transformar 
     * @param {string} type qual o tipo que você quer transformar
     * @returns {string} Base64 | ascci | others
     * 
     */
    encoded: (value, type) => {
        if (typeof value !== 'string' && typeof type !== 'string') throw new Error('params need to be strings')
        return new Buffer(value).toString(type);
    },

    /**
    * @param {string} value valor que você vai transformar 
    * @param {string} type qual o tipo que você quer transformar
    * @returns {string} Base64 | ascci | others
    * 
    */
    decoded: (value, type) => {
        if (typeof value !== 'string' && typeof type !== 'string') throw new Error('params need to be strings')
        return Buffer.from(value, 'base64').toString(type)
    }
}



export default buffer;