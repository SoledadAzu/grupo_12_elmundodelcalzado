const fs = require("fs")
const path = require("path")
const controller ={
    login:(req,res)=>{
        res.render('users/login')
    },
    upload:(req, res) =>{
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
    
    },

    register:(req,res)=>{
        res.render('users/registro')
    },
    uploadRegister:(req, res)=>{
        const ruta =path.join(__dirname,"..", "database","users.json")
        const usuariosRegistrados =fs.readFileSync(ruta,"utf-8")
        let usuarios
    
        if(usuariosRegistrados ===""){
            usuarios = []
        }else{
            usuarios = JSON.parse(usuariosRegistrados)
        }
    
        const usuario={
    
            id:req.body.id,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email:req.body.email,
            password:req.body.password
        }
        usuario.id=usuarios.length + 1,
    
         usuarios.push(usuario)
         fs.writeFileSync(ruta, JSON.stringify(usuarios, null,4))
         res.redirect("register")
    }
    
}
module.exports=controller