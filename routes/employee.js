var express = require('express');
var router = express.Router();

// Require employee controller.
var employeeController = require('../controllers/employeeController');

// when user visit /employee go to employee controller
router.get('/employee', employeeController.employee_get);

module.exports = router;