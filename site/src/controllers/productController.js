const oferta = require('../database/productOferta.json')
const productos = require('../database/productos.json')

const ofertas=productos.filter(e=>{
    return e.outlet===true
})
const prodHombre=productos.filter(e=>{
    return e.genero ==="hombre"
})

const prodMujer=productos.filter(e=>{
    return e.genero ==="mujer"
   
})
const prodTemporada=productos.filter(e=>{
    return e.temporada ===true
   
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
    mercaderia: (req,res)=>{
        res.render("products/todosLosProductos", {productos})
        
        
    },
    hombre: (req,res)=>{
        res.render("products/hombre", {prodHombre})    
    },
    mujer: (req,res)=>{
        res.render("products/mujer",{prodMujer})
    },
    temporada: (req,res)=>{
        res.render("products/temporada",{prodTemporada})
    },
    ofertas: (req,res)=>{
        res.render("products/outlet",{ofertas})
    }
}
module.exports=controller