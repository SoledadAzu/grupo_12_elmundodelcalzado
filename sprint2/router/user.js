const express = require('express')
const path = require('path')
const router = express.Router()

router.get('login',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','login.html'))
})
router.get('register',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','registro.html'))
})

module.exports = router