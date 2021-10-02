const oferta = require('../database/productOferta.json');
const productos = require('../database/productos.json')

const ofertas=productos.filter(e=>{
    return e.outlet===true
})
const controller={
    product:(req,res)=>{
        let id = req.params.id;
        let idProduct = productos.find(e=>{
            return e.id === +id
        })
        res.render('products/detalleProducto',{idProduct,ofertas})
    },
    carrito:(req,res)=>{
        res.render('products/carritoDeCompras',{ofertas,oferta})
    },
    general: (req, res) => {
		const search = req.query.keywords.trim()
		if(search !==''){
			const result = productos.filter(e=> e.title.toLowerCase().includes(search.toLowerCase()))
            	res.render('products/productosGeneral',{result,search})
		}else{
			res.redirect('/')
		}

	},
}
module.exports=controller;