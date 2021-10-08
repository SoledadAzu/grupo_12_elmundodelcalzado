const express = require('express');
const router = express.Router();
const {login,register} = require('../controllers/userController')

router.get('/login',login)

//create user
router.get('/register',register)
router.post("/register",(req, res)=>{
    const ruta =path.join(__dirname,"..", "data","users.json")
    const usuariosRegistrados =fs.readFileSync(ruta,"utf-8")
    let usuarios

    if(usuariosRegistrados ===""){
        usuarios = []
    }else{
        usuarios = JSON.parse(usuariosRegistrados)
    }

    const usuario={
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        email:req.body.email,
        password:req.body.password
    }
     usuarios.push(usuario)
     fs.writeFyleSync(ruta, JSON.readFileSync(usuarios, null,4))
     res.redirect("users/register")
})

module.exports = router