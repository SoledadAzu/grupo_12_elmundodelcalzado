const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.json');

let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller={
    admin:(req,res)=>{
        res.render('admin/admin',{products,toThousand})
    },
    create:(req,res)=>{
        res.render('admin/create')
    },
    edit:(req,res)=>{
        let id = req.params.id
		let idFind=products.find(e=>{
			return e.id === +id
		})
        res.render('admin/edit',{idFind,toThousand})
    },
    
    // Create -  Method to store
	store: (req, res) => {
	
		const formCreate = req.body
		console.log(formCreate)
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

			fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))
			res.redirect(`/admin`)}
	},

    deleteprod : (req, res) => {
		products=products.filter(e=> e.id !== +req.params.id)

		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))
		res.redirect('/admin')
	}

}
module.exports=controller;