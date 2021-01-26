/* GET product_categories page. */
exports.product_categories_get = [
  function(req, res, next) {
  res.render('product_categories', { title: 'Product Categories page' });
}
];
