const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/defensaAlConsumidor',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','..','extras','defensaAlConsumidor.html'))
})


module.exports = router