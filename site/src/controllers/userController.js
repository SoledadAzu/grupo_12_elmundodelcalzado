const fs = require("fs")
const path = require("path")
const {validationResult} = require('express-validator')

const controller ={
    login:(req,res)=>{
        res.render('users/login')
    },
    upload:(req, res) =>{
        const ruta =path.join(__dirname,"..", "database","users.json")
        const usuariosRegistrados =fs.readFileSync(ruta,"utf-8")
    
        const usuarios = JSON.parse(usuariosRegistrados)

        const errors = validationResult(req)

        if(errors.isEmpty()){

            

            const encontrado= usuarios.find(element=>{
                return element.email===req.body.email  
                   
               })
               
               if(encontrado ){
                   
                if(encontrado.password === req.body.password) {
                    req.session.usuarioLogueado = encontrado.email
                    req.session.rol = encontrado.rol
                    res.redirect('/')
                    
                }else  if(encontrado.password !== req.body.password){
                    let mensaje = "la contraseña es incorrecta"
                    res.render("users/login",{
                        mensaje:mensaje,
                        oldData:req.body})
                    
                }
                    
                }else { 
                    res.redirect("register")
                    
                }  

        }else{
            res.render('users/login',{
                errors:errors.mapped(),
                oldData:req.body
            })
        }

       
    
    
    
    
    
    },

    register:(req,res)=>{
        res.render('users/registro')
    },
    uploadRegister:(req, res)=>{
        const ruta =path.join(__dirname,"..", "database","users.json")
        const usuariosRegistrados =fs.readFileSync(ruta,"utf-8")
        let usuarios
        const errorsRegister = validationResult(req)
        
        if(errorsRegister.isEmpty()){

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
            password:req.body.password,
            img: req.file ? req.file.filename : 'default.jpg',
            rol:"user"
        }
        usuario.id=usuarios.length + 1,
    
         usuarios.push(usuario)
         fs.writeFileSync(ruta, JSON.stringify(usuarios, null,4))
         res.redirect("/")
    }else{
        res.render('users/registro',{
            errors:errorsRegister.mapped(),
            oldData:req.body
        })
    }
}
    
}
module.exports=controller