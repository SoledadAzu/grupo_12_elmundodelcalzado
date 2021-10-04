const express = require('express');
const router = express.Router();
const {admin,create,edit,store,update,deleteprod} = require('../controllers/admin')

router.get('/',admin)
router.get('/create',create); 
router.post('/create',store);  
router.get('/edit/:id',edit); 
router.put('/edit/:id',update);
router.delete('/eliminar/:id',deleteprod) 

module.exports = router