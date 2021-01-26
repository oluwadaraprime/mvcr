var express = require('express');
var router = express.Router();

// Require posts controller.
var postsController = require('../controllers/postsController');

// when users visit /post go to post controller
router.get('/posts', postsController.posts_get);

module.exports = router;