const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/garantias',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','..','extras','garantias.html'))
})


module.exports = router