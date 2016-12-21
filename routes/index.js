var express = require('express');
var router = express.Router();
var nicki = require('../models/nicki');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nicki Daily', nicki: nicki });
});

module.exports = router;
