/* GET categories page. */
exports.categories_get = [
  function(req, res, next) {
  res.render('categories', { title: 'Categories page' });
}
];
