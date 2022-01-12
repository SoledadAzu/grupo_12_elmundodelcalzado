const express = require('express');
const router = express.Router();
const{show,add,remove}=require('../controllers/cartController')



router
    .get('/show',show)
    .post('/add/:id', add)
    .delete('/remove/:id/:talle', remove)


module.exports = router