var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('apartados', { title: 'La Mafia del Poder' });
});
router.get('/definicionesbasicas', function(req, res, next) {
  res.render('definiciones basicas', { title: 'La Mafia del Poder' });
});
router.get('/tps', function(req, res, next) {
  res.render('sistemas de información transaccionales', { title: 'La Mafia del Poder' });
});

module.exports = router;
