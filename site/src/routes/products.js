const express = require('express')
const router = express.Router()
const{product,carrito,general,mercaderia,hombre,mujer,temporada,ofertas,adidas,adidasoriginal,nike,puma,topper,asics,converse,fila,newbalance}=require('../controllers/productController')



router.get('/productDetail/:id',product)
router.get('/carritoDeCompras',carrito)
router.get('/general',general)
router.get("/",mercaderia)
router.get("/hombre",hombre)
router.get("/mujer",mujer)
router.get("/temporada",temporada)
router.get("/outlet",ofertas)
router.get("/adidas",adidas)
router.get("/adidasoriginal",adidasoriginal)
router.get("/nike",nike)
router.get("/puma",puma)
router.get("/topper",topper)
router.get("/asics",asics)
router.get("/converse",converse)
router.get("/fila",fila)
router.get("/newbalance",newbalance)





module.exports = router