var express = require('express');
var router = express.Router();

var count = 0;

/* GET home page. */
router.get('/', function(req, res) {
	count++;
    res.render('index', { title: 'Express', count: count });
});



module.exports = router;
