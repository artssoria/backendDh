const { body, check, validationResult } = require('express-validator');
const path = require('path');

const aspirantesValidations = [
    body('first_name').trim().notEmpty().withMessage('Debe escribir su nombre'),
    body('last_name').trim().notEmpty().withMessage('Debe escribir su Apellido'),

    body('dni').isNumeric().trim().notEmpty().withMessage('Debe escribir su DNI').isLength({min: 7}).withMessage('El DNI debe tener al menos 7 dígitos'),
    body('email').isEmail().notEmpty().withMessage('Debe escribir su email'),
    body('phone_number').isNumeric().notEmpty().withMessage('Debe escribir su numero de telefono'),

    body('birthdate')
        .notEmpty()
        .isISO8601()
        .withMessage('Debe proporcionar una fecha de nacimiento válida')
        .custom((value) => {
            const birthday = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birthday.getFullYear();
            const monthDiff = today.getMonth() - birthday.getMonth();
            const dayDiff = today.getDate() - birthday.getDate();
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                return age - 1;
            }
            return age;
        })
        .withMessage('Debe tener al menos 18 años'),

    check('image').custom((value, {req})=>{
        let file = req.file;
        if(file){
            let fileExtension = path.extname(file.originalname)
            let acceptedExtensions = ['.jpg', '.jpeg', '.png']
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones permitidas para imagenes son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;
    }),
    body('url_linkedin').isURL().withMessage('Debe proporcionar una URL válida de LinkedIn')
]

module.exports = aspirantesValidations