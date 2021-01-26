var express = require('express');
var router = express.Router();

// Require orders controller.
var ordersController = require('../controllers/ordersController');

// when users visit /products go to products controller
router.get('/orders', ordersController.orders_get);

module.exports = router;