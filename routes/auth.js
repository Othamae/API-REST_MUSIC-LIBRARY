const express = require('express');
const  {loginCtrl, RegisterCtrol} = require('../controllers/auth')
const router = express.Router();
const {validatorRegister, validatorLogin} = require('../validators/auth')


/**
 * Paths to create new register and login:
 * 
 * http:localhost:3001/api/auth/login
 * http:localhost:3001/api/auth/register
 */
router.post('/register', validatorRegister, RegisterCtrol);


router.post('/login', validatorLogin, loginCtrl);





module.exports = router;