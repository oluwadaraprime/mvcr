/* GET product_options page. */
exports.product_options_get = [
  function(req, res, next) {
  res.render('product_options', { title: 'Product Options page' });
}
];
