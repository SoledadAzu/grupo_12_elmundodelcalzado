const vendidos = require('../database/productos.json')

const lanzamiento=vendidos.filter(e=>{
   return e.vendidos!==true
})
const zapatillas=vendidos.filter(e=>{
    return e.vendidos===true
})
const controller ={
    index:(req,res)=>{
        res.render('home/home',{lanzamiento,zapatillas})
    }
}
module.exports= controller;
