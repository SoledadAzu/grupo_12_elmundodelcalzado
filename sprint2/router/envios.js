const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/envios',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','..','extras','envios.html'))
})


module.exports = router