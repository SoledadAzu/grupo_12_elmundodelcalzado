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
            include:[{association:"Marca"}]
        })
        .then(producto=>{
            let lanzamiento=producto.filter(e=>{
                return e.id_temporadas===2
            })
            let outlet=producto.filter(e=>{
                return e.id_outlets===2
            })
            
            db.Imagenes_Productos.findAll()
            .then(imagen=>{
                

            res.render('home/home',{lanzamiento,outlet,imagen,toThousand})
            })
            .catch(error=>{
                res.send(error)
            })
            
            
        })
        .catch(error=>{
            res.send(error)
        })
        
    },
    
}
module.exports= controller;
