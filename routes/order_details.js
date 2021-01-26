var express = require('express');
var router = express.Router();

// Require order_details controller.
var order_detailsController = require('../controllers/order_detailsController');

// when users visit /order_details go to order_details controller
router.get('/order_details', order_detailsController.order_details_get);

module.exports = router;