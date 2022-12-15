const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require('../utils/handlePropertiesEngine')
const propertiesKey = getProperties()

/**
 * User object (name, password...)
 * @param {*} user 
 */
const tokenSign = async (user) =>{
    const sign = jwt.sign(
        {
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: '2h'
        }
    )
    return sign;
}
/**
 * Token from JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async(tokenJwt) =>{
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
        
    } catch (e) {
        return null
    }

}


module.exports= {tokenSign, verifyToken};