const productHome=require("../database/productosHome.json")
const oferta = require('../database/productOferta.json');
const controller={
    product:(req,res)=>{
        let id = req.params.id;
        let idProduct = productHome.find(e=>{
            return e.id === +id
        })
        res.render('products/detalleProducto',{idProduct,oferta})
    },
}
module.exports=controller;