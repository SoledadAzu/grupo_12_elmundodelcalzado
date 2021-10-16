const express = require('express');
const router = express.Router();
const {login,register, upload, uploadRegister} = require('../controllers/userController')
const {body} = require('express-validator')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

// validando login
const validatorlogin=[
    // body('nombre').notEmpty().withMessage('Este campo no puede estar vacio'),
    // body('apellido').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('email')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isEmail().withMessage('Debe ingresar un correo valido'),
    body('password')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:6}).withMessage('La contraseña debe tener un minimo de 6 caracteres')
]

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,path.join(__dirname,'..','..','public','images','users'))
    },
    filename:(req,file,callback)=>{
        const name = 'img-' + Date.now() + path.extname(file.originalname)
        callback(null,name)
    }
})

const fileImg = function(req,res,next){
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/ )){
        req.fileValidationError = "solo se permite imagenes";
        return callback(null,false,req.fileValidationError)
    }
    callback(null,true)
}

const imgUpload = multer({
    storage,
    fileImg

})


//login user
router.get('/login',login)
router.post("/login",validatorlogin,upload)

    

//create user
router.get('/register',register)
router.post("/register",imgUpload.single('file'),validatorlogin,uploadRegister)

 
module.exports=router