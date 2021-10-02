const express = require('express')
const router = express.Router()
const{ product,carrito,general }=require('../controllers/productController')



router.get('/productDetail/:id',product)
router.get('/carritoDeCompras',carrito)
router.get('/general',general)



module.exports = router