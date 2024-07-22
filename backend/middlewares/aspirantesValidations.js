const { body, check, validationResult } = require('express-validator');
const path = require('path');

const aspirantesValidations = [
    body('first_name').trim().notEmpty().withMessage('Debe escribir su nombre'),
    body('last_name').trim().notEmpty().withMessage('Debe escribir su Apellido'),

    body('dni').isNumeric().trim().notEmpty().withMessage('Debe escribir su DNI').isLength({min: 5}),
    body('email').isEmail().notEmpty().withMessage('Debe escribir su email'),
    body('phone_number').isNumeric().notEmpty().withMessage('Debe escribir su numero de telefono').isLength({min: 5}),

    body('birthdate')
        .notEmpty()
        .isISO8601()
        .withMessage('Debe proporcionar una fecha de nacimiento válida en formato ISO 8601')
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
    body('sex').notEmpty().isIn(['Masculino', 'Femenino', 'No Binario']).withMessage('El género debe ser uno de los siguientes: masculino, femenino, no binario'),

    body('id_profession').notEmpty().isMobilePhone().withMessage('Debe proporcionar un número de teléfono válido'),

    body('province').notEmpty().withMessage('Seleccione su provincia'),
    body('department').notEmpty().withMessage('Seleccione su departamento'),
    body('city').notEmpty().withMessage('Seleccione su ciudad'),

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
    body('url_linkedin').isURL().withMessage('Debe proporcionar una URL válida').matches(/^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/).withMessage('Debe proporcionar una URL válida de LinkedIn')
]

module.exports = aspirantesValidations