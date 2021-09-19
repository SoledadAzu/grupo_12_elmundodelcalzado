const express = require('express')
const router = express.Router()
const{ privacidad }=require('../../controllers/extras/privacidadController')

router.get('/privacidad',privacidad)


module.exports = router