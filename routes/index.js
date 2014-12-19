var express = require('express');
var router = express.Router();

var count = 0;

/* GET home page. */
router.get('/', function(req, res) {
//  res.render('index', { title: 'Express' });
	count++;
	res.send("count: " + count);
});



module.exports = router;
