var express = require('express');
var router = express.Router();

// Require department controller.
var departmentController = require('../controllers/departmentController');

// when users visit /department go to department controller
router.get('/department', departmentController.department_get);

module.exports = router;

