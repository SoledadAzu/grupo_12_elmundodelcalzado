<<<<<<< HEAD
 
=======
const productosHome=require("../database/productosHome.json")
const imagenesPublicidad=require("../database/imagenesPublicidad.json")

const lanzamiento=productosHome.filter(e=>{
   return e.masVendido===false
})
const zapatillas=productosHome.filter(e=>{
    return e.masVendido===true
})
>>>>>>> develop
const controller ={
    index:(req,res)=>{
        res.render('home/home',{lanzamiento,zapatillas,imagenesPublicidad})
    }
}
module.exports= controller;
