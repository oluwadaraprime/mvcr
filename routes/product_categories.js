var express = require('express');
var router = express.Router();

// Require products_categories controller.
var product_categoriesController = require('../controllers/product_categoriesController');

// when users visit /products_categories go to products_categories controller
router.get('/product_categories', product_categoriesController.product_categories_get);

module.exports = router;