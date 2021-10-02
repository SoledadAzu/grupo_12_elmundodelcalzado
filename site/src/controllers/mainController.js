const productosHome=require("../database/productosHome.json")
const imagenesPublicidad=require("../database/imagenesPublicidad.json")
const vendidos = require('../database/productos.json')

const lanzamiento=vendidos.filter(e=>{
   return e.vendidos!==true
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
