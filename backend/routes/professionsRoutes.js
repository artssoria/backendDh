const express = require('express');
const router = express.Router();
const professionsController = require('../controllers/professionsController');

router.get('/', professionsController.getProfessions);

module.exports = router;