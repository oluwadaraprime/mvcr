/* GET orders page. */
exports.orders_get = [
  function(req, res, next) {
  res.render('orders', { title: 'Orders page' });
}
];
