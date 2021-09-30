const productHome=require("../database/productosHome.json")
const oferta = require('../database/productOferta.json');
const productos = require('../database/productos.json')
const controller={
    product:(req,res)=>{
        let id = req.params.id;
        let idProduct = productos.find(e=>{
            return e.id === +id
        })
        res.render('products/detalleProducto',{idProduct,oferta})
    },
    carrito:(req,res)=>{
        res.render('products/carritoDeCompras',{productHome,oferta})
    },
    general:(req,res)=>{
        res.render('products/productosGeneral',{productos})
    }
}
module.exports=controller;