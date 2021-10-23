const fs = require("fs")
const path = require("path")
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');


const controller ={
    login:(req,res)=>{
        res.render('users/login')
    },
    upload:(req, res) =>{
        const ruta =path.join(__dirname,"..", "database","users.json")
        const usuariosRegistrados =fs.readFileSync(ruta,"utf-8")
    
        const usuarios = JSON.parse(usuariosRegistrados)

        const errors = validationResult(req)
        

        if(errors.isEmpty){

            
            const encontrado= usuarios.find(element=>{
                return element.email===req.body.email  
                   
               })
               
               if(encontrado && bcrypt.compareSync(req.body.password,encontrado.password) ){
                    
                    req.session.usuarioLogueado ={
                        email:encontrado.email,
                        nombre: encontrado.nombre,
                        rol:encontrado.rol
                    } 

                    if(req.body.recordame != undefined){
                        res.cookie('recordame',req.session.usuarioLogueado,{maxAge: 60000})
                    }
                    res.redirect('/')
                    
                }else{
                    let mensaje = "la contraseña es incorrecta"
                    res.render("users/login",{
                        mensaje:mensaje,
                        oldData:req.body})
                    }
                     
                }
        
                
                res.render('users/login',{
                errors:errors.mapped(),
                oldData:req.body
            })
        

    },

    register:(req,res)=>{
        res.render('users/registro')
    },
    uploadRegister:(req, res)=>{
        const ruta =path.join(__dirname,"..", "database","users.json")
        const usuariosRegistrados =fs.readFileSync(ruta,"utf-8")
        let usuarios
        const errors = validationResult(req)
       
        if(req.fileValidationError){

            let img = {
                param:"img",
                msg:req.fileValidationError,

            }
            errors.errors.push(img)
        }
        
        if(errors.isEmpty()){

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
            password: bcrypt.hashSync(req.body.password,10),
            img: req.file ? req.file.filename : 'default.jpg',
            rol:"user"
        }
        usuario.id=usuarios.length + 1,
    
         usuarios.push(usuario)
         fs.writeFileSync(ruta, JSON.stringify(usuarios, null,4))
         req.session.usuarioLogueado ={
            email:req.body.email,
            nombre: req.body.nombre,
            rol:"user"
        } 
         res.redirect("/")
    }else{
        res.render('users/registro',{
            errors:errors.mapped(),
            oldData:req.body
        })
    }
},
perfiluser:(req,res)=>{
    res.render('users/perfiluser')
}
    
}

module.exports=controller