const {body} = require('express-validator')

const validatorProductos=[
    body('title').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('price').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('colors').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('detalles').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('talles').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('description').notEmpty().withMessage('Este campo no puede estar vacio')      
]
module.exports = validatorProductos