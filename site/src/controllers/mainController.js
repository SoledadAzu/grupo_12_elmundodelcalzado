const vendidos = require('../database/productos.json')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const lanzamiento=vendidos.filter(e=>{
   return e.vendidos!==true
})
const outlet = vendidos.filter(e=>{
    return e.outlet === true
})
const controller ={
    index:(req,res)=>{
        res.render('home/home',{lanzamiento,outlet,toThousand})
    },
    
}
module.exports= controller;
