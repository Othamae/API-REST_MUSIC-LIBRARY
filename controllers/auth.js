const {matchedData} = require('express-validator')
const {tokenSign} = require('../utils/handlerJwt')
const  {encrypt, compare} = require('../utils/handlePassword')
const {handleHttpError} = require('../utils/handleError')
const {usersModel} = require('../models');

/**
 * Controlador para registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const RegisterCtrol = async (req,res)=>{    
    try{
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = {...req, password}
        const dataUser = await usersModel.create(body);
        dataUser.set('password', undefined, {strict: false})
        
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        
        res.send({data});
        
    }catch(e){
        console.log(e)
        handleHttpError(res, 'ERROR_REGISTER_USER')
    }
}

/**
 * Controlador para logear un usuario
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req,res)=>{    
    try{
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email });        
        if (!user){
            handleHttpError(res, 'USER_NOT_EXIST',404);
            return
        }
        const hashPassword = user.get('password');        
        console.log({hashPassword})
        const check = await compare(req.password, hashPassword)
        if(!check){
            handleHttpError(res, 'INCORRECT_PASSWORD',401);
            return
        }
        user.set('password', undefined, {strict:false})
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send({data});
        
    }catch(e){        
        handleHttpError(res, 'ERROR_LOGIN_USER')
    }

}


module.exports = {loginCtrl, RegisterCtrol}