/* GET comment page. */
exports.comment_get = [
  function(req, res, next) {
  res.render('comment', { title: 'Comments page' });
}
];
