const oferta = require('../database/productOferta.json');
const productos = require('../database/productos.json')

const ofertas=productos.filter(e=>{
    return e.outlet===true
})
console.log(ofertas)
const controller={
    product:(req,res)=>{
        let id = req.params.id;
        let idProduct = productos.find(e=>{
            return e.id === +id
        })
        res.render('products/detalleProducto',{idProduct,oferta})
    },
    carrito:(req,res)=>{
        res.render('products/carritoDeCompras',{ofertas,oferta})
    },
    general:(req,res)=>{
        res.render('products/productosGeneral',{productos})
    }
}
module.exports=controller;