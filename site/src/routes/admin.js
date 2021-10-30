const express = require('express');
const router = express.Router();
const {admin,create,edit,store,update,deleteprod,usuarios,cerrar} = require('../controllers/admin');
const permisoMiddleware = require('../middleware/permisoMiddleware')
const validadorCreate = require('../middleware/validadorProductos')
const imgUpload = require('../middleware/middlewareStorage');




router.get('/',permisoMiddleware,admin)
router.get('/cerrar',cerrar)
router.get('/create',permisoMiddleware,create); 
router.post('/create',permisoMiddleware,imgUpload.array('img'),validadorCreate,store);  
router.get('/edit/:id',permisoMiddleware,edit); 
router.put('/edit/:id',permisoMiddleware,update);
router.delete('/eliminar/:id',permisoMiddleware,deleteprod) 
router.get("/usuarios",permisoMiddleware,usuarios)

module.exports = router