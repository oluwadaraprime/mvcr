var express = require('express');
var router = express.Router();

// Require user controller.
var usersController = require('../controllers/usersController');

// when users visit /user go to user controller
router.get('/users', usersController.users_get);

module.exports = router;