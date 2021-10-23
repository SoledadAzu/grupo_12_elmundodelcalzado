const express = require('express')
const router = express.Router()
const{ compra,defensa,envio,garantia,privacidad, politicaDeCambio,acercaDeNosotros,denegado }=require('../../controllers/extras/informationController')


router.get('/comprar',compra)
router.get('/defensaAlConsumidor',defensa)
router.get('/envio',envio)
router.get('/garantias',garantia)
router.get('/privacidad',privacidad)
router.get('/politicaDeCambios',politicaDeCambio)
router.get('/acercaDeNosotros',acercaDeNosotros)
router.get("/denegado",denegado)


module.exports = router