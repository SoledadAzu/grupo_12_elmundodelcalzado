const express = require('express');
const router = express.Router();
const {login,register, upload, uploadRegister} = require('../controllers/userController')
const {body} = require('express-validator')
const multer = require('multer')
const path = require('path')

// validando login
const validatorlogin=[
  
    body('email')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isEmail().withMessage('Debe ingresar un correo valido'),
    body('password')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:6}).withMessage('La contraseña debe tener un minimo de 6 caracteres')
]
// validando Register
const validatorRegister=[
    body('nombre').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('apellido').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('email')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isEmail().withMessage('Debe ingresar un correo valido'),
    body('password')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:6}).withMessage('La contraseña debe tener un minimo de 6 caracteres')
        
]

// creando el destino y el nombre del archivo
const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,path.join(__dirname,'..','..','public','images','users'))
    },
    filename: (req,file,callback) => {
        const name = 'img-' + Date.now() + path.extname(file.originalname)
        callback(null,name)
    },
});

const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.fileValidationError = "Solo se permite imágenes JPG,JPEG,PNG,GIF,WEBP";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const imgUpload = multer({
    storage,
    fileFilter
})

//login user
router.get('/login',login)
router.post("/login",validatorlogin,upload)

    

//create user
router.get('/register',register)
router.post("/register",imgUpload.single('img'),validatorRegister,uploadRegister)

 
module.exports=router