/* GET post page. */
exports.posts_get = [
  function(req, res, next) {
  res.render('posts', { title: 'Posts page' });
  }
];