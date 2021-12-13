const fs = require("fs")
const path = require("path")
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');

const db = require("../database/models");



const controller ={
    // vista del login de usuario
    login:(req,res)=>{
        res.render('users/login')
    },
    // accion de encontrar al usuario logueado
    upload:(req, res) =>{
      
        const errors = validationResult(req)
        
        
        if(errors.isEmpty()){ // consulta si esta vacio de errores

            
            db.Usuarios.findOne({
                where:{
                    email:req.body.email  
                },
                
                 include:[{association:"Categoria_Usuario"}]
            })
            .then(usuario=>{
                if(usuario !== null){

                
                if(bcrypt.compareSync(req.body.password,usuario.password)){
                            // se crea una session
                            req.session.usuarioLogueado ={
                                email:usuario.email,
                                nombre: usuario.nombre,
                                rol:usuario.Categoria_Usuario.nombre,
                                id:usuario.id
                            } 
                            
                            // crea una cookie en el caso de que tilde la casilla RECORDAME
                            if(req.body.recordame !== undefined){
                                res.cookie('rememberMe',req.session.usuarioLogueado,{maxAge: 60000})
                            }
                            res.redirect('/')
                            
                    }else{
                            // en el caso de error de contraseña, se lo manda a la vista
                            let mensaje = "la contraseña es incorrecta"
                            res.render("users/login",{
                                mensaje:mensaje,
                                oldData:req.body})
                             }
                }else{
                    let mensajeUsuario = "el usuario no existe"
                    res.render("users/login",{
                        mensajeUsuario:mensajeUsuario,
                        oldData:req.body})
                        }
                
            })
        
            .catch(error=>{
                res.send(error)
            })
               
    }else{
        //se manda ERRORES de los input
        res.render('users/login',{
        errors:errors.mapped(),
        oldData:req.body
    })
    }    
},
    // vista de registro
    register:(req,res)=>{
        res.render('users/registro')
    },
    // accion de registrar al usuario por primera vez
    uploadRegister:(req, res)=>{
        
        const errors = validationResult(req)
       
        if(req.fileValidationError){

            let img = {
                param:"img",
                msg:req.fileValidationError,

            }
            errors.errors.push(img)
        }
        
        if(errors.isEmpty()){

        db.Categoria_Usuarios.findAll()
        .then(categoria=>{
           
             db.Usuarios.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                categoriaId: categoria[1].id,
                imagen: req.file ? req.file.filename: "default.jpg"
            })
            .then((Usuarios) => {
                
                if(Usuarios){
                    req.session.usuarioLogueado ={
                        id:Usuarios.id,   
                        email:Usuarios.email,
                        nombre: Usuarios.nombre,
                        rol:"user"
                    } 
                     res.redirect("/")
            }
            res.redirect("/user/login")
            
            })
            .catch((errors) => res.send(errors))
        })

        .catch((errors) => res.send(errors))

        
    }else{
        res.render('users/registro',{
            errors:errors.mapped(),
            oldData:req.body
        })
    }
},
    // vista principal del perfil del usuario
    perfiluser:(req,res)=>{
        // userPerfil=usuarios.find(e=> e.id === +req.params.id)
        db.Usuarios.findByPk(req.params.id)
        .then(usuario=>{
            res.render('users/perfiluser',{userPerfil:usuario})
        })
        .catch(error=>{
            res.send(error)
        })
    
},
 //elimina un usuario de tabla admin
    deleteUser : (req, res) => {
        
            let userId = req.params.id;
            db.Usuarios.destroy(
                {where: {id: userId}, 
                force: true}) // force: true es para asegurar que se ejecute la acción
            .then(usuario=>{
                if(usuario === 1){
                    
                    res.redirect('/admin/usuarios')
                }else{
                    res.send('no se pudo eliminar')
                }
                
            })
            .catch(error => res.send(error)) 
        
    // usuarios=usuarios.filter(e=> e.id !== +req.params.id)

    // fs.writeFileSync(usuariosFilePath,JSON.stringify(usuarios,null,2))
    // res.redirect("admin/usuariosRegistrados")
},
// elimina el usuario de su perfil
    deleteUserPerfil:(req,res)=>{
    let userId = req.params.id;
            db.Usuarios.destroy(
                {where: {id: userId}, 
                force: true}) // force: true es para asegurar que se ejecute la acción
            .then(usuario=>{
                if(usuario === 1){
                    if(req.session.usuarioLogueado || req.cookies.rememberMe){
                        req.session.destroy()	
                        res.cookie('rememberMe',"{ maxAge:-1}")
                        
                    }
                    res.redirect('/')
                }else{
                    res.send('no se pudo eliminar')
                }
                
            })
            .catch(error => res.send(error)) 
},

// guarda en usuarios registrados y cambio el Rol
    updateUser:(req,res)=>{
    
        
        // let id = req.params.id
		// let idFind=usuarios.find(e=>{
		// 	return e.id === +id
			
		// })
       
        //  if(idFind){
        //         idFind.rol= req.body.rol
    
    
        //         fs.writeFileSync(usuariosFilePath,JSON.stringify(usuarios,null,2))
        //         
        //  }
        
            db.Usuarios.update(
                {
                    categoriaId: req.body.rol === "user" ? 2 : 1        
            },
                {
                    where: {id: req.params.id}
                })
            .then(usuario=>{
                if(usuario[0] !== 0){
                    
                    res.redirect('/admin/usuarios')
                }else{
                    res.send("no se pudo hacer el cambio")
                }
            })
            .catch(error=>{
                res.send(error)
            })
     
      
},
// vista del perfil elegido
    perfilEdit:(req,res)=>{
        db.Usuarios.findByPk(req.params.id)
        .then(usuario=>{
            
            res.render('users/perfilUserEdit',{userPerfil:usuario})
        })
        .catch(error=>{
            res.send(error)
        })
  
},
// edicion del perfil
    editePerfil:(req,res)=>{
       
        const errors = validationResult(req)
        
        if(req.fileValidationError){

            let img = {
                param:"img",
                msg:req.fileValidationError,

            }
            
            errors.errors.push(img)
        }
       
         
        if(errors.isEmpty()){
       
        let userId = req.params.id;
        db.Usuarios.update(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email:req.body.email,
                password: bcrypt.hashSync(req.body.password,10),
                imagen: req.file ? req.file.filename: "default.jpg"
    },
            {
                where: {id: userId}
            })
        .then(usuario=> {
            
            if(usuario[0] !== 0){
                if(req.session.usuarioLogueado || req.cookies.rememberMe){
                    req.session.destroy()	
                    res.cookie('rememberMe',"{ maxAge:-1}")
                    
                }
                return res.redirect('/')
            }else{
                res.send("no se pudo hacer el cambio")
            }
             
        })          
        .catch(error => res.send(error))
        
     }else{
        res.render('users/perfilUserEdit',{
            errors:errors.mapped(),
            oldData:req.body
        })
      }
    },
    
     
}
module.exports=controller




    



