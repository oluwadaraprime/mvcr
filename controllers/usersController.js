/* GET user page. */
exports.users_get = [
  function(req, res, next) {
  res.render('users', { title: 'Users page', name:'Emmanuelokunade' });
}
];
