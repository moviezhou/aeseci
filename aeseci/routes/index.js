var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/market', function(req, res, next) {
  res.render('market', { title: 'Express' });
});

router.get('/law', function(req, res, next) {
  res.render('law', { title: 'Express' });
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/supervision', function(req, res, next) {
  res.render('supervision', { title: 'Express' });
});

router.get('/agreement', function(req, res, next) {
  res.render('agreement', { title: 'Express' });
});

module.exports = router;
