/* GET options page. */
exports.options_get = [
  function(req, res, next) {
  res.render('options', { title: 'Options page' });
}
];
