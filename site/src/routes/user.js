const express = require('express');
const router = express.Router();
const {login,register, upload, uploadRegister} = require('../controllers/userController')



//login user
router.get('/login',login)
router.post("/login",upload)

    

//create user
router.get('/register',register)
router.post("/register",uploadRegister)

 
module.exports=router