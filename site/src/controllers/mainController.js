// const vendidos = require('../database/productos.json')
const fs = require('fs')
const path = require('path')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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

