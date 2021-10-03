const express = require('express');
const router = express.Router();
const {admin,create,edit,del} = require('../controllers/admin')

router.get('/',admin)
router.get('/edit',edit)
router.get('/eliminar',del)
/*** CREATE ONE PRODUCT ***/ 
router.get('/create/',create); 
router.post('/',store); 

module.exports = router