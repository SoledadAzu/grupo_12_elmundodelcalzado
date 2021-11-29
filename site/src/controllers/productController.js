const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productSeleccionado.json');

let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const oferta = require('../database/productOferta.json')
const productos = require('../database/productos.json')
const db = require('../database/models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const ofertas=productos.filter(e=>{
    return e.outlet=== "true"
})
const prodHombre=productos.filter(e=>{
    return e.genero ==="hombre"
})

const prodMujer=productos.filter(e=>{
    return e.genero ==="mujer"
   
})
const prodTemporada=productos.filter(e=>{
    return e.temporada ==="true"
   
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

    // vista del producto por ID en detalles de producto
    product:(req,res)=>{
        // let id = req.params.id;
        // let idProduct = productos.find(e=>{
        //     return e.id === +id
        // })
        // res.render('products/detalleProducto',{idProduct,ofertas,toThousand})
        let id=req.params.id
        db.Productos.findByPk(id)
        .then(producto=>{
            db.Imagenes_Productos.findAll({
                where:{
                    id_producto:id
                }
            })
            .then(imagen=>{
                
                restoImagen=imagen.filter(e=>{
                    return e !== imagen[0]
                })
                db.Colores.findAll({
                    where:{
                        id_producto:id
                    }
                })
                .then(color=>{
                    db.Talles.findAll({
                        where:{
                            id_producto:id
                        }
                    })
                    .then(talle=>{
                        //res.send(talle)
                        
                        db.Detalles.findAll({
                            where:{
                                id_producto:id
                            }
                        })
                        .then(detalle=>{
                            // res.send(detalle)
                            res.render('products/detalleProducto',{
                                idProduct:producto,
                                imagen,colors:color,
                                talles:talle,
                                detalles:detalle,
                                restoImagen,
                                ofertas,
                                toThousand})
                        })
                        .catch(error=>{
                            res.send(error)
                        })
                    })
                    .catch(error=>{
                        res.send(error)
                    })
                    
                })
                .catch(error=>{
                    res.send(error)
                })
                
            })
            .catch(error=>{
                res.send(error)
            })
            
        })
        .catch(error=>{
            res.send(error)
        })
    },
    // vista del carrito por ID
    carrito:(req,res)=>{
        res.render('products/carritoDeCompras',{ofertas,oferta,toThousand})
    },
    
    // vista del search y aplicacion del mismo
    general: (req, res) => {
		const search = req.query.keywords.trim()
		if(search !==''){
			const titulo = productos.filter(e=> e.title.toLowerCase().includes(search.toLowerCase()))
			const marca = productos.filter(e=> e.marca.toLowerCase().includes(search.toLowerCase()))
			const genero = productos.filter(e=> e.genero.toLowerCase().includes(search.toLowerCase()))
            	res.render('products/productosSearch',{titulo,marca,genero,search,toThousand})
		}else{
			res.redirect('/')
		}
	},
    // vista de todos los productos
    mercaderia: (req,res)=>{
        res.render("products/todosLosProductos", {productos,toThousand})
        
        
    },
    // vista de todos los productos de hombre
    hombre: (req,res)=>{
        res.render("products/hombre", {prodHombre,toThousand})    
    },
    // vista de todos los productos de mujer
    mujer: (req,res)=>{
        res.render("products/mujer",{prodMujer,toThousand})
    },
    // vista de todos los productos de temporada
    temporada: (req,res)=>{
        res.render("products/temporada",{prodTemporada,toThousand})
    },
    // vista de todos los productos de outlet
    ofertas: (req,res)=>{
        res.render("products/outlet",{ofertas,toThousand})
    },
    // vista de todos los productos de adiddas
    adidas:(req,res)=>{
        res.render("products/adidas", {prodAdidas,toThousand})    
    },
    // vista de todos los productos de adiddasOriginal
    adidasoriginal:(req,res)=>{
        res.render("products/adidasoriginal", {prodAdidasOriginal,toThousand})    
    },
    // vista de todos los productos de nike
    nike:(req,res)=>{
        res.render("products/nike", {prodNike,toThousand})    
    },
    // vista de todos los productos de tooper
    topper:(req,res)=>{
        res.render("products/topper", {prodTopper,toThousand})    
    },
    // vista de todos los productos de puma
    puma:(req,res)=>{
        res.render("products/puma", {prodPuma,toThousand})    
    },
    // vista de todos los productos de asics
    asics:(req,res)=>{
        res.render("products/asics", {prodAsics,toThousand})    
    },
    // vista de todos los productos de converse
    converse:(req,res)=>{
        res.render("products/converse", {prodConverse,toThousand})    
    },
    // vista de todos los productos de fila
    fila:(req,res)=>{
        res.render("products/fila", {prodFila,toThousand})    
    },
    // vista de todos los productos de newBalance
    newbalance:(req,res)=>{
        res.render("products/newbalance", {prodNewBalance,toThousand})    
    },
}
module.exports=controller