/* GET order_details page. */
exports.order_details_get = [
  function(req, res, next) {
  res.render('order_details', { title: 'Order Details page' });
}
];
