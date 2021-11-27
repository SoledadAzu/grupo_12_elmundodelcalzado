const fs = require('fs');
const path = require('path');
const productsFilePath =  path.join(__dirname, '../database/productos.json')
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const usuarios = JSON.parse(fs.readFileSync( path.join(__dirname, '../database/users.json'), 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {validationResult} = require('express-validator');
const db = require('../database/models');
const productos = require('../database/models/productos');


const controller={

	// vista admin
    admin:(req,res)=>{
		db.Productos.findAll({
			include:[{
				association:"Genero"
			},{
				
				association:"Marca"
			},{
				
				association:"Temporada"
			}
			]	
		})
		// db.Talles.findAll({
		// 	include:[{
		// 		association:"Producto"
		// 	}]
		// })
		.then(producto=>{
			
			res.render('admin/admin',{products:producto,toThousand})
		})
		.catch(error=>{
			res.send(error)
		})
        
	
    },
	// accion de cerrar session
	cerrar:(req,res)=>{
		if(req.session.usuarioLogueado || req.cookies.rememberMe){
			req.session.destroy()	
			res.cookie('rememberMe',"{ maxAge:-1}")
		}
		res.redirect('/')
		},
		

	// vista de crear un producto
    create:(req,res)=>{
		
		let genero = db.Generos.findAll();
        let temporada = db.Temporadas.findAll();
		let outlet = db.Outlets.findAll();
		let marca =db.Marcas.findAll();
        Promise
        .all([genero, temporada, outlet,marca])
        .then(([generos, temporadas, outlets,marcas]) => {
            res.render('admin/create',{generos,temporadas,outlets,marcas})
		})
        .catch(error => res.send(error))
		

        
    },

	// vista del producto a editar por ID
    edit:(req,res)=>{
        let id = req.params.id
		let idFind=products.find(e=>{
			return e.id === +id
			
		})
		const detalles = idFind.detalles.map(e=>e)
		const colores = idFind.colors.map(e=>e)
		const editartalles = idFind.talles.map(e=> e)
		
        res.render('admin/edit',{idFind,toThousand,detalles,colores,editartalles})
		
    },
    
    // accion de crear el producto
	/*store: (req, res) => {

		const errors = validationResult(req)
		
		if(req.fileValidationError){

			let img ={
				param:"img",
				msg:req.fileValidationError,
			}
            
			errors.errors.push(img)
        }
		
		if(errors.isEmpty()){
			const formCreate = req.body
			let img = []
			req.files.forEach(imagen=>{
				img.push(imagen.filename)

			})
			formCreate.imgP = img[0]
			let remove = img.shift()
			formCreate.img = img
			
			

		formCreate.id = products.length + 1

		products.push(formCreate);

		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))
	
		res.redirect('/admin')
		}else{
			res.render('admin/create',{
				errors:errors.mapped(),
				oldData:req.body
			})
		}
		
	},*/
    
		store: (req, res) => {

			const errors = validationResult(req)
			
			if(req.fileValidationError){
	
				let img ={
					param:"img",
					msg:req.fileValidationError,
				}
				
				errors.errors.push(img)
			}
			
			if(errors.isEmpty()){
				const formCreate = req.body
				let img = []
				req.files.forEach(imagen=>{
					img.push(imagen.filename)
	
				})
				formCreate.imgP = img[0]
				let remove = img.shift()
				formCreate.img = img
				
				
	          //logica para que se comunique a la base de datos
			  //create: function 
				db.Talles.findAll({
					// include:[{association:"Producto"}]
							
				})
				
			//   db.Productos.create(

			// 		{
			// 			nombre: req.body.title,
			// 			precio: req.body.price,
			// 			descripcion: req.body.description,
			// 			id_generos: 1,
			// 			id_marcas: 1,
			// 			id_temporadas:1,
			// 			id_outlets:1,
			// 			id_colores:1
			// 			//creando un producto
			// 		}
			// 	)
			 .then(talle=>{
				//  res.json(producto)
				db.Productos.findAll()
				.then(producto=>{

				})
				.catch(error=>{
					res.send(error)
				})
				 let talles = talle.map(element=>{
					 return element.nombre
				 })
				 let bodyTalles = req.body.talles
				 let ultimoproduct = productos.length - 1
				let agragandoTalles = bodyTalles.forEach(elemento=>{
					db.Talles.create({
						nombre: elemento,
						id_producto: productos[ultimoproduct].id + 1
					})
					.then(talle=>{
						console.log(agragandoTalles)
					})
					.catch(error=>{

					})
				})
				
				// res.redirect('/admin')
				
			 })
			 .catch(error=>{
				 res.send(error)
			 })
		     
	
			}else{
				res.render('admin/create',{
					errors:errors.mapped(),
					oldData:req.body
				})
			}
			
		},
	
	

	//accion de buscar el producto y editarlo

	update: function (req,res) {
        let productos = req.params.id;
        db.Productos
        .update(
            {
				nombre: req.body.title,
				precio: req.body.price,
				descripcion: req.body.description,
				id_generos: 1,
				id_marcas: 1,
				id_temporadas:1,
				id_outlets:1,
				id_talles:1,
				id_colores:1
			            
            },
            {
                where: {id: productos}
            })
        .then(editar=> {
			res.json(editar)
            /*return res.redirect('/admin')*/
		})           
        .catch(error => res.send(error))
    },

    /*update: (req, res) => {
		const upDate = products.find(e=> e.id === +req.params.id)
	
		if(upDate){
			upDate.title = req.body.title
			upDate.price = req.body.price
			upDate.marca = req.body.marca
			upDate.genero = req.body.genero
			upDate.temporada = req.body.temporada
			upDate.description = req.body.description
			upDate.color = req.body.color
			upDate.detalles = req.body.detalles
			upDate.outlet = req.body.outlet
			upDate.talles = req.body.talles
		}
			fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))
			
			res.redirect('/admin')
	},*/
	


	// accion de eliminar un producto encontrado por id
	delete: function (req,res) {
        let movieId = req.params.id;
        Movies
        .findByPk(movieId)
        .then(Movie => {
            return res.render(path.resolve(__dirname, '..', 'views',  'admin.js'), {Movie})})
        .catch(error => res.send(error))
    },
	destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/admin')})
        .catch(error => res.send(error)) 
    },

    

    deleteprod : (req, res) => {
		products=products.filter(e=> e.id !== +req.params.id)

		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))
		res.redirect('/admin')
	},
	



	// vista de todos los usuarios registrados
	usuarios : (req, res) => {
		db.Usuarios.findAll({
			// include:[{association:"Categoria_Usuario"}]
		})
		.then(usuario=>{
			
			db.Categoria_Usuarios.findAll()
			.then(categoria=>{
				
				res.render("admin/usuariosRegistrados",{usuarios:usuario,categorias:categoria})
			})
		})
		.catch(error=>{
			res.send(error)
		})
		
	}
	
}
module.exports=controller;