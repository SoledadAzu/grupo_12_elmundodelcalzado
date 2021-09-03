const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/carritoDeCompras',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','carritoDeCompras.html'))
})


module.exports = router