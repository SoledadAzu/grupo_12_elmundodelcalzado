const express = require('express');
const router = express.Router();
const{index}=require('../controllers/mainController')
/* const userRegistered= require("../Middlewares/userRegistered") */
router.get('/',index)


module.exports = router