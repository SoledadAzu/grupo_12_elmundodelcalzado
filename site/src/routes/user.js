const express = require('express');
const router = express.Router();
const {login,register} = require('../controllers/userController')
const fs = require("fs")
const path = require("path")

//login user
router.get('/login',login)
router.post("/login",(req, res) =>{
    const ruta =path.join(__dirname,"..", "database","users.json")
    const usuariosRegistrados =fs.readFileSync(ruta,"utf-8")

    const usuarios = JSON.parse(usuariosRegistrados)
   const encontrado= usuarios.find(element=>{
    return element.email===req.body.email  
       
   })



 if(encontrado ){
if(encontrado.password === req.body.password) {
    res.redirect("/")
}
    
}else { 
    res.redirect("register")
    console.log(encontrado)
}  

})

    

//create user
router.get('/register',register)
router.post("/register",(req, res)=>{
    const ruta =path.join(__dirname,"..", "database","users.json")
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
     fs.writeFileSync(ruta, JSON.stringify(usuarios, null,4))
     res.redirect("register")
})

 
module.exports=router