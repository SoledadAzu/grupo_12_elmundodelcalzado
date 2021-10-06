const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productSeleccionado.json');

let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const oferta = require('../database/productOferta.json')
const productos = require('../database/productos.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
const prodAdidas=productos.filter(e=>{
    return e.marca ==="adidas"
})
const prodAdidasOriginal=productos.filter(e=>{
    return e.marca ==="adidasoriginal"
})
const prodNike=productos.filter(e=>{
    return e.marca ==="nike"
})
const prodTopper=productos.filter(e=>{
    return e.marca ==="topper"
})
const prodPuma=productos.filter(e=>{
    return e.marca ==="puma"
})
const prodAsics=productos.filter(e=>{
    return e.marca ==="asics"
})
const prodFila=productos.filter(e=>{
    return e.marca ==="fila"
})
const prodConverse=productos.filter(e=>{
    return e.marca ==="converse"
})
const prodNewBalance=productos.filter(e=>{
    return e.marca ==="newbalance"
})

const controller={
    product:(req,res)=>{
        let id = req.params.id;
        let idProduct = productos.find(e=>{
            return e.id === +id
        })
        res.render('products/detalleProducto',{idProduct,ofertas,toThousand})
    },
    carrito:(req,res)=>{
        res.render('products/carritoDeCompras',{ofertas,oferta,toThousand})
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
        res.render("products/todosLosProductos", {productos,toThousand})
        
        
    },
    hombre: (req,res)=>{
        res.render("products/hombre", {prodHombre,toThousand})    
    },
    mujer: (req,res)=>{
        res.render("products/mujer",{prodMujer,toThousand})
    },
    temporada: (req,res)=>{
        res.render("products/temporada",{prodTemporada,toThousand})
    },
    ofertas: (req,res)=>{
        res.render("products/outlet",{ofertas,toThousand})
    },
    adidas:(req,res)=>{
        res.render("products/adidas", {prodAdidas,toThousand})    
    },
    adidasoriginal:(req,res)=>{
        res.render("products/adidasoriginal", {prodAdidasOriginal,toThousand})    
    },
    nike:(req,res)=>{
        res.render("products/nike", {prodNike,toThousand})    
    },
    topper:(req,res)=>{
        res.render("products/topper", {prodTopper,toThousand})    
    },
    puma:(req,res)=>{
        res.render("products/puma", {prodPuma,toThousand})    
    },
    asics:(req,res)=>{
        res.render("products/asics", {prodAsics,toThousand})    
    },
    converse:(req,res)=>{
        res.render("products/converse", {prodConverse,toThousand})    
    },
    fila:(req,res)=>{
        res.render("products/fila", {prodFila,toThousand})    
    },
    newbalance:(req,res)=>{
        res.render("products/newbalance", {prodNewBalance,toThousand})    
    },
}
module.exports=controller