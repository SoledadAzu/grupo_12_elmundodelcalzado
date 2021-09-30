const express = require('express');
const router = express.Router();
const {admin,create,edit,del} = require('../controllers/admin')

router.get('/',admin)
router.get('/create',create)
router.get('/edit',edit)
router.get('/eliminar',del)


module.exports = router