const express = require('express');
const router = express.Router();
const {login,register,perfiluser, upload, uploadRegister,deleteUser,updateUser,editePerfil,perfilEdit} = require('../controllers/userController')
const validatorRegister = require('../middleware/validadorRegistro')
const validatorlogin = require('../middleware/validadorLogin')
const validatorPerfil = require('../middleware/validadorPerfil')
const imgUpload = require('../middleware/middlewareStorage')

//login user
router.get('/login',login)
router.post("/login",validatorlogin,upload)

    

//create user
router.get('/register',register)
router.post("/register",imgUpload.single('img'),validatorRegister,uploadRegister)

// perfil de usuario
router.get('/perfiluser/:id',perfiluser) // vista principal de usuario
router.get('/editPerfil/:id',perfilEdit) // vista para editar
router.post('/updatePerfil/:id',imgUpload.single('imge'),validatorPerfil,editePerfil) // post de la pagina con validacion


// tabla admin usuarios
router.delete('/eliminar/:id',deleteUser)
router.put('/update/:id',updateUser)


 
module.exports= router