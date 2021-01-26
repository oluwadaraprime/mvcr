var express = require('express');
var router = express.Router();

// Require products_options controller.
var product_optionsController = require('../controllers/product_optionsController');

// when users visit /products_options go to products_options controller
router.get('/product_options', product_optionsController.product_options_get);

module.exports = router;