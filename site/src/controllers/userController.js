const fs = require("fs")
const path = require("path")
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const usuariosFilePath =  path.join(__dirname, '../database/users.json')
let usuarios = JSON.parse(fs.readFileSync( path.join(__dirname, '../database/users.json'), 'utf-8'));
const db = require("../database/models")


const controller ={
    login:(req,res)=>{
        res.render('users/login')
    },
    upload:(req, res) =>{
      
        const errors = validationResult(req)
        
        
        if(errors.isEmpty()){ // consulta si esta vacio de errores

            // busco al usuario
            const userEncontrado= usuarios.find(element=>{
                return element.email===req.body.email  
                })

               //consulta si se encontro y valido la contraseñas
               if(userEncontrado && bcrypt.compareSync(req.body.password,userEncontrado.password) ){
                    // se crea una session
                    req.session.usuarioLogueado ={
                        email:userEncontrado.email,
                        nombre: userEncontrado.nombre,
                        rol:userEncontrado.rol,
                        id:userEncontrado.id
                    } 
                    // crea una cookie en el caso de que tilde la casilla RECORDAME
                    if(req.body.recordame != undefined){
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
                     
                }
                //se manda ERRORES de los input
                res.render('users/login',{
                errors:errors.mapped(),
                oldData:req.body
            })
        

    },

    register:(req,res)=>{
        res.render('users/registro')
    },

    uploadRegister:(req, res)=>{
        // const ruta =path.join(__dirname,"..", "database","users.json")
        // const usuariosRegistrados =fs.readFileSync(ruta,"utf-8")
        // let usuarios
        const errors = validationResult(req)
       
        if(req.fileValidationError){

            let img = {
                param:"img",
                msg:req.fileValidationError,

            }
            errors.errors.push(img)
        }
        
        if(errors.isEmpty()){

            // if(usuariosRegistrados ===""){
            //     usuarios = []
            // }else{
            //     usuarios = JSON.parse(usuariosRegistrados)
            
            
       
    //     usuario.id=usuarios.length + 1,
    //  const usuario={
    
    //         id:req.body.id,
    //         nombre:req.body.nombre,
    //         apellido:req.body.apellido,
    //         email:req.body.email,
    //         password: bcrypt.hashSync(req.body.password,10),
    //         img: req.file ? req.file.filename : 'default.jpg',
    //         rol:"user"
    //     }
    //      usuarios.push(usuario)
    //      fs.writeFileSync(ruta, JSON.stringify(usuarios, null,4))

        db.Usuarios.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            id_categoria_usuario:1,
            imagen: req.file ? req.file.filename: "default.jpg"
    })
        .then((Usuarios) => {
            if(Usuarios){
                req.session.usuarioLogueado ={
                        email:req.body.email,
                        nombre: req.body.nombre,
                        rol:"user"
                    } 
                     res.redirect("/")
            }
            res.redirect("/user/login")
            
    })
        .catch((errors) => console.log(errors))

        
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
        
            let userId = req.params.id;
            Usuarios
            .destroy({where: {id: userId}, force: true}) // force: true es para asegurar que se ejecute la acción
            .then(()=>{
                return res.redirect('admin/usuariosRegistrados')})
            .catch(error => res.send(error)) 
        
    // usuarios=usuarios.filter(e=> e.id !== +req.params.id)

    // fs.writeFileSync(usuariosFilePath,JSON.stringify(usuarios,null,2))
    // res.redirect("admin/usuariosRegistrados")
},

// guarda en usuarios registrados
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
            
          
        // const upDateUser = usuarios.find(e=> e.id === +req.params.id)
	
		// if(upDateUser){
			
        //     upDateUser.nombre=req.body.nombre,
        //     upDateUser.apellido=req.body.apellido,
        //     upDateUser.email=req.body.email,
        //     upDateUser.password=bcrypt.hashSync(req.body.password,10),
        //     upDateUser.img=req.file ? req.file.filename 
        //         : upDateUser.img ? upDateUser.img 
        //         : null
      	
        // }

        // fs.writeFileSync(usuariosFilePath,JSON.stringify(usuarios,null,2))

        let userId = req.params.id;
        Usuarios
        .update(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                password: bcrypt.hashSync(req.body.password,10),
                rolesid: 1,
                imagen: req.file ? req.file.filename: "default.jpg"
    },
            {
                where: {id: userId}
            })
        .then(()=> {
            return res.redirect('user/login')})            
        .catch(error => res.send(error))
        


        if(req.session.usuarioLogueado || req.cookies.rememberMe){
			req.session.destroy()	
			res.cookie('rememberMe',"{ maxAge:-1}")
		}

        
        res.redirect("/user/login")

     }else{
        res.render('users/perfilUserEdit',{
            errors:errors.mapped(),
            oldData:req.body
        })
      }
    },
    
     
}
module.exports=controller




    



