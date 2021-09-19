const express = require('express')
const router = express.Router()
const{ envio }=require('../../controllers/extras/enviosController')


router.get('/envios',envio)


module.exports = router