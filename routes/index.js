var express = require('express');
var router = express.Router();

var count = 0;

exports.index = function(req, res) {
    count++;
    res.locals = {
        title: 'PortalChess',
        count: count
    };
    return res.render('index/index', {
        partials: {
            layout: 'layout',
            partial: 'index/_test'
        }
    });
};

/* 
router.get('/', function(req, res) {
	count++;
   res.render('index', { title: 'Express', count: count });
});



module.exports = router;
*/