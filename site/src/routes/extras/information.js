const express = require('express')
const router = express.Router()
const{ compra,defensa,envio,garantia,privacidad, politicaDeCambio }=require('../../controllers/extras/informationController')


router.get('/comprar',compra)
router.get('/defensa',defensa)
router.get('/envio',envio)
router.get('/garantia',garantia)
router.get('/privacidad',privacidad)
router.get('/politicaDeCambio',politicaDeCambio)


module.exports = router