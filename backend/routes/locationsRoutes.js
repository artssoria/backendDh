const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locationsController');

router.get('/provinces', locationsController.getProvinces);
router.get('/departments/:province', locationsController.getDepartments);
router.get('/cities/:department', locationsController.getCities);

module.exports = router;