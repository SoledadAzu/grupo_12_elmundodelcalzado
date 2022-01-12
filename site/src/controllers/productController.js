const fs = require('fs');
const path = require('path');

const oferta = require('../database/productOferta.json')
const productos = require('../database/productos.json')
const db = require('../database/models');
const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const ofertas=productos.filter(e=>{
    return e.outlet=== "true"
})


const controller={

    // vista del producto por ID en detalles de producto
    product:(req,res)=>{
        
        let id=req.params.id
        db.Productos.findByPk(id)
        .then(producto=>{
            db.Imagenes.findAll({
                where:{
                    productoId:id
                }
            })
            .then(imagen=>{
                
                restoImagen=imagen.filter(e=>{
                    return e !== imagen[0]
                })
                
                db.Colores.findAll({
                    where:{
                        productoId:id
                    }
                })
                .then(color=>{
                    db.Talles.findAll({
                        where:{
                            productoId:id
                        }
                    })
                    .then(talle=>{
                        //res.send(talle)
                        
                        db.Detalles.findAll({
                            where:{
                                productoId:id
                            }
                        })
                        .then(detalle=>{
                            // res.send(detalle)
                            db.Productos.findAll({
                                include:[{all:true}]
                            })
                            .then(otro=>{
                                // res.send(producto)
                                res.render('products/detalleProducto',{
                                    productos:otro,
                                    idProduct:producto,
                                    imagen,
                                    colors:color,
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
            
        })
        .catch(error=>{
            res.send(error)
        })
    },
    // vista del carrito por ID
    carrito:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(productos=>{
            // res.send(producto)
            res.render('products/carritoDeCompras',{productos,ofertas,oferta,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })
        
        
    },
    
    // vista del search y aplicacion del mismo
    general: (req, res) => {
        const search = req.query.keywords.trim()
            db.Productos.findAll({
                where:{
                    nombre:{
                        [Op.substring]:`%${search}%`
                    } //busca lo que llega en body en la base de datos
                },
                include:[{all:true}]
            })
            .then(producto=>{
                // res.send(producto)
                if(search !==''){
                res.render('products/productosSearch',{producto,search,toThousand})
            }else{
                    res.redirect('/')
                }    
            })
            .catch(error=>res.send(error))
        
        
		
	},
    // vista de todos los productos
    mercaderia: (req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/todosLosProductos", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })
        
        
    },
    // vista de todos los productos de hombre
    hombre: (req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/hombre", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })
            
    },
    // vista de todos los productos de mujer
    mujer: (req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/mujer",{producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })
        
    },
    // vista de todos los productos de temporada
    temporada: (req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/temporada",{producto,toThousand})
            
        })
        .catch(error=>{
            res.send(error)
        })
        
    },
    // vista de todos los productos de outlet
    ofertas: (req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/outlet",{producto,toThousand})
            
        })
        .catch(error=>{
            res.send(error)
        })
        
    },
    // vista de todos los productos de adiddas
    adidas:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/adidas", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })
          
    },
    // vista de todos los productos de adiddasOriginal
    adidasoriginal:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/adidasoriginal", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })      
    },
    // vista de todos los productos de nike
    nike:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/nike", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })   
    },
    // vista de todos los productos de tooper
    topper:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/topper", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })   
    },
    // vista de todos los productos de puma
    puma:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/puma", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })  
    },
    // vista de todos los productos de asics
    asics:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/asics", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        }) 
    },
    // vista de todos los productos de converse
    converse:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/converse", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        }) 
  
    },
    // vista de todos los productos de fila
    fila:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/fila", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        }) 
    },
    // vista de todos los productos de newBalance
    newbalance:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
            // res.send(producto)
            res.render("products/newbalance", {producto,toThousand})
        })
        .catch(error=>{
            res.send(error)
        })  
    },
}
module.exports=controller