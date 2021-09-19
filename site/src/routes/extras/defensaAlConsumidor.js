const express = require('express')
const router = express.Router()
const{ defensa }=require('../../controllers/extras/defensaController')

router.get('/defensaAlConsumidor',defensa)


module.exports = router