// const vendidos = require('../database/productos.json')
const fs = require('fs')
const path = require('path')
const productsFilePath =  path.join(__dirname, '../database/productos.json')
let vendidos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// const lanzamiento=vendidos.filter(e=>{
//    return e.vendidos!==true
// })
// const outlet = vendidos.filter(e=>{
//     return e.outlet === "true"
// })
const db = require('../database/models');
const { Op } = require("sequelize");

const controller ={
    // vista del home
    index:(req,res)=>{
        db.Productos.findAll({
            include:[{all:true}]
        })
        .then(producto=>{
           
         
            res.render('home/home',{producto,toThousand})
              
        })
        .catch(error=>{
            res.send(error)
        })
        
    },
    
}
module.exports= controller;

// product:(req,res)=>{
//     let products = db.products.findAll({
//         include : [
//             colores,
//             imagenes,
//             detalles,
//             talles
//         ]
//     })
//     let adidas = db.Marcas.findAll({
//         where: {
//             id :  1
//         },
//         include : [
//             {association:'Productos'},
//         ]
//     })
//     Promise.all([adidas,puma,nike])
//     .then(([adidas,puma,nike]) => {