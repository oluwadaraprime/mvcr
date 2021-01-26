var express = require('express');
var router = express.Router();

// Require options controller.
var optionsController = require('../controllers/optionsController');

// when users visit /options go to optionscontroller
router.get('/options', optionsController.options_get);

module.exports = router;