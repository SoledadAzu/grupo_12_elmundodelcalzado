const productEnCompra = require("../database/productEnCompra.json")
const productOferta = require("../database/productOferta.json") 

const controller={
    carrito:(req,res)=>{
        res.render('shoppingCart/carritoDeCompras',{productEnCompra,productOferta})
    }
}
module.exports=controller;