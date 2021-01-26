var express = require('express');
var router = express.Router();

// Require comment controller.
var commentController = require('../controllers/commentController');

// when users visit /comment go to comment controller
router.get('/comment', commentController.comment_get);

module.exports = router;

