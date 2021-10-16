const express = require('express');
const router = express.Router();
const {admin,create,edit,store,update,deleteprod,usuarios} = require('../controllers/admin');




router.get('/',admin)
router.get('/create',create); 
router.post('/create',store);  
router.get('/edit/:id',edit); 
router.put('/edit/:id',update);
router.delete('/eliminar/:id',deleteprod) 
router.get("/usuarios",usuarios)

module.exports = router