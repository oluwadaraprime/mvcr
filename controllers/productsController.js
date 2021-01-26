/* GET products page. */
exports.products_get = [
  function(req, res, next) {
  res.render('products', { title: 'Products page' });
}
];
