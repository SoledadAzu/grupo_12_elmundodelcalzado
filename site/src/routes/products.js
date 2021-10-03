const express = require('express')
const router = express.Router()
const{product,carrito,general,mercaderia,hombre,mujer,temporada,ofertas}=require('../controllers/productController')



router.get('/productDetail/:id',product)
router.get('/carritoDeCompras',carrito)
router.get('/general',general)
router.get("/productos",mercaderia)
router.get("/hombre",hombre)
router.get("/mujer",mujer)
router.get("/temporada",temporada)
router.get("/outlet",ofertas)





module.exports = router