const fs = require('fs');
const path = require('path');
const productsFilePath =  path.join(__dirname, '../database/productos.json')
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const usuarios = JSON.parse(fs.readFileSync( path.join(__dirname, '../database/users.json'), 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller={
    admin:(req,res)=>{
        res.render('admin/admin',{products,toThousand})
    },
	cerrar:(req,res)=>{
		if(req.session.usuarioLogueado!== undefined){
			req.session.destroy()
			res.redirect('/')
		}
	},
    create:(req,res)=>{
        res.render('admin/create')
    },
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
    
    // Create -  Method to store
	store: (req, res) => {
	
		const formCreate = req.body
		
		formCreate.id = products.length + 1

		products.push(formCreate);

		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))

		res.redirect('/admin')
	},

    update: (req, res) => {
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

			fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))
			res.redirect(`/admin`)}
	},

    deleteprod : (req, res) => {
		products=products.filter(e=> e.id !== +req.params.id)

		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))
		res.redirect('/admin')
	},
	usuarios:(req,res) => {
		res.render("admin/usuariosRegistrados",{usuarios})
	}
	
}
module.exports=controller;