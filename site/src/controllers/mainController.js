// const vendidos = require('../database/productos.json')
const fs = require('fs')
const path = require('path')
const productsFilePath =  path.join(__dirname, '../database/productos.json')
let vendidos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const lanzamiento=vendidos.filter(e=>{
   return e.vendidos!==true
})
const outlet = vendidos.filter(e=>{
    return e.outlet === "true"
})

const controller ={
    // vista del home
    index:(req,res)=>{

        res.render('home/home',{lanzamiento,outlet,toThousand})
    },
    
}
module.exports= controller;
