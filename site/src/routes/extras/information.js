const express = require('express')
const router = express.Router()
const{ compra,defensa,envio,garantia,privacidad, politicaDeCambio }=require('../../controllers/extras/informationController')

router.get('/',compra)
router.get('/',defensa)
router.get('/',envio)
router.get('/',garantia)
router.get('/',privacidad)
router.get('/',politicaDeCambio)


module.exports = router