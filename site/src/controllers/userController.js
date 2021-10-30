const fs = require("fs")
const path = require("path")
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const usuariosFilePath =  path.join(__dirname, '../database/users.json')
let usuarios = JSON.parse(fs.readFileSync( path.join(__dirname, '../database/users.json'), 'utf-8'));



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
                        rol:encontrado.rol,
                        id:encontrado.id
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
        userPerfil=usuarios.find(e=> e.id === +req.params.id)
        
    res.render('users/perfiluser',{userPerfil})
},
    deleteUser : (req, res) => {
    
    usuarios=usuarios.filter(e=> e.id !== +req.params.id)

    fs.writeFileSync(usuariosFilePath,JSON.stringify(usuarios,null,2))
    res.redirect("admin/usuariosRegistrados")
},
    updateUser:(req,res)=>{
    
        
        let id = req.params.id
		let idFind=usuarios.find(e=>{
			return e.id === +id
			
		})
       
         if(idFind){
                idFind.rol= req.body.rol
    
    
                fs.writeFileSync(usuariosFilePath,JSON.stringify(usuarios,null,2))
                res.render('admin/usuariosRegistrados',{usuarios})
         }
      
},
    perfilEdit:(req,res)=>{
        userPerfil=usuarios.find(e=> e.id === +req.params.id)
        
    res.render('users/perfilUserEdit',{userPerfil})
},
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
            
          
        const upDateUser = usuarios.find(e=> e.id === +req.params.id)
	
		if(upDateUser){
			
            upDateUser.nombre=req.body.nombre,
            upDateUser.apellido=req.body.apellido,
            upDateUser.email=req.body.email,
            upDateUser.password=bcrypt.hashSync(req.body.password,10),
            upDateUser.img=req.file ? req.file.filename : 'default.jpg',
            

			fs.writeFileSync(usuariosFilePath,JSON.stringify(usuarios,null,2))
            req.session.usuarioLogueado ={
                email:req.body.email,
                nombre: req.body.nombre,
                rol:upDateUser.rol
            } 
            
            res.redirect(`/user/perfiluser/${req.params.id}`)
           
			
        }
           
             
        

    }else{
        res.render('users/perfilUserEdit',{
            errors:errors.mapped(),
            oldData:req.body
        })
    }
    },
    
     
}

module.exports=controller