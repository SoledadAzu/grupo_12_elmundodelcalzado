const vendidos = require('../database/productos.json')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const lanzamiento=vendidos.filter(e=>{
   return e.vendidos!==true
})
const zapatillas=vendidos.filter(e=>{
    return e.vendidos===true
})
const controller ={
    index:(req,res)=>{
        res.render('home/home',{lanzamiento,zapatillas,toThousand})
    },
    
}
module.exports= controller;
