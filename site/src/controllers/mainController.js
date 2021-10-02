const productosHome=require("../database/productosHome.json")
const imagenesPublicidad=require("../database/imagenesPublicidad.json")
const vendidos = require('../database/productos.json')

const lanzamiento=productosHome.filter(e=>{
   return e.masVendido===false
})
const zapatillas=vendidos.filter(e=>{
    return e.vendidos===true
})
const controller ={
    index:(req,res)=>{
        res.render('home/home',{lanzamiento,zapatillas,imagenesPublicidad})
    }
}
module.exports= controller;
