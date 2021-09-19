const express = require('express')
const router = express.Router()
const{ compra }=require('../../controllers/extras/comprarController')

router.get('/comprar',compra)


module.exports = router