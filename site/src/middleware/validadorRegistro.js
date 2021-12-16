const {body} = require('express-validator')

const validatorRegister=[
    body('nombre').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('apellido').notEmpty().withMessage('Este campo no puede estar vacio'),
    body('email')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isEmail().withMessage('Debe ingresar un correo valido'),
    body('password')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:6}).withMessage('La contraseña debe tener un minimo de 6 caracteres')
        
]
module.exports = validatorRegister

/*formulario de usuario*/




