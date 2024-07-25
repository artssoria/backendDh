const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const aspirantesController = require('../controllers/aspirantesController');
const aspirantesValidations = require('../middlewares/aspirantesValidations')

let storage = multer.diskStorage({
    destination: function (req, file,cb){
        cb(null,path.join(__dirname,'..','public','img'))
    },
    
    filename: function(req, file, cb){
        pathFileName = 'img-' + Date.now() + path.extname(file.originalname) 
        cb(null, pathFileName);
    }
})

let upload = multer({storage})

router.get('/', aspirantesController.getAspirantes);
router.post('/', upload.single('image'), aspirantesValidations, aspirantesController.addAspirante);
// router.put('/:id', aspirantesController.updateAspirante);
// router.delete('/:id', aspirantesController.deleteAspirante);

module.exports = router;