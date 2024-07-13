const express = require('express');
const router = express.Router();
const professionsController = require('../controllers/professionsController');

router.get('/', professionsController.getProfessions);
router.post('/', professionsController.addProfession);
router.put('/:id', professionsController.updateProfession);
router.delete('/:id', professionsController.deleteProfession);

module.exports = router;
