var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Controller
router.post('/', function(req, res, next) {
  console.log(`username: ${req.body.username}`);
  res.render('index');
});

module.exports = router;
