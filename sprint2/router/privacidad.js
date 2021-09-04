const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/privacidad',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','..','extras','privacidad.html'))
})


module.exports = router