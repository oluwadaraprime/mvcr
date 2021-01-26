var express = require('express');
var router = express.Router();

// Require customers controller.
var customersController = require('../controllers/customersController');

// when users visit /customers go to customers
router.get('/customers', customersController.customers_get);

module.exports = router;