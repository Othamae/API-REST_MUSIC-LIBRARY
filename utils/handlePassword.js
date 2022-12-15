const bcryptjs = require('bcryptjs');

/**
 * Password not encrypted
 * @param {*} passwordPlain 
 */

const encrypt = async (passwordPlain)=>{
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash;
}
/**
 * Pasamos not encrypted and password encrypted to compare them
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword)=>{
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = {encrypt, compare}