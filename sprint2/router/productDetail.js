const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/productDetail',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','detalleProducto.html'))
})


module.exports = router