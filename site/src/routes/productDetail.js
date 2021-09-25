const express = require('express')
const router = express.Router()
const{ product }=require('../controllers/productController')

router.get('/productDetail',product)
router.get('/productDetail/:id',product)


module.exports = router