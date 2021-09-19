const express = require('express')
const router = express.Router()
const{ garantia }=require('../../controllers/extras/garantiaController')

router.get('/garantias',garantia)


module.exports = router