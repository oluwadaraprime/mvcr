var express = require('express');
var router = express.Router();

// Require products controller.
var productsController = require('../controllers/productsController');

// when users visit /products go to products controller
router.get('/products', productsController.products_get);

module.exports = router;