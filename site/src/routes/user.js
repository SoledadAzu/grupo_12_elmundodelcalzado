const express = require('express');
const router = express.Router();
const {login,register, upload, uploadRegister} = require('../controllers/userController')
const {body} = require('express-validator')

const validatorlogin=[
    body('email')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isEmail().withMessage('Debe ingresar un correo valido'),
    body('password')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:6}).withMessage('La contraseña debe tener un minimo de 6 caracteres')
]



//login user
router.get('/login',login)
router.post("/login",validatorlogin,upload)

    

//create user
router.get('/register',register)
router.post("/register",uploadRegister)

 
module.exports=router