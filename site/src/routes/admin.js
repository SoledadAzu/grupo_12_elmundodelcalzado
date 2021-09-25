const express = require('express');
const router = express.Router();
const {admin,create,edit} = require('../controllers/admin')

router.get('/',admin)
router.get('/create',create)
router.get('/edit',edit)


module.exports = router