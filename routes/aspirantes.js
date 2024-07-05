const express = require('express');
const router = express.Router();
const aspirantesController = require('../controllers/aspirantesController');

// Definición de rutas
router.get('/', aspirantesController.getAspirantes);
router.post('/', aspirantesController.addAspirante);
router.put('/:id', aspirantesController.updateAspirante);
router.delete('/:id', aspirantesController.deleteAspirante);

module.exports = router;
