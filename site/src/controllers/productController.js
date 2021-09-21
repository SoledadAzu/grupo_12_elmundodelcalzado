const detalle = require('../database/hombreProducto.json');
const controller={
    product:(req,res)=>{
        let id = req.params.id;
        let idProduct = detalle.find(e=>{
            return e.id === +id
        })
        res.render('products/detalleProducto',{idProduct})
    },
}
module.exports=controller;