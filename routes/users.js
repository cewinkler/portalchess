var express = require('express');
var router = express.Router();
var _ = require('lodash');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var md5 = require('../md5');

var mongoose = require('mongoose');
var db = mongoose.connection;
var userSchema = new mongoose.Schema({
    name: String,
    password: String,
});
var User = mongoose.model('User', userSchema);

/* GET users listing. */
router.get('/', function(req, res) {
    User.find({name:'Carl'}, function(e, u) {
        if (e) console.log("Error");
        else {
            if (u.length == 0) {
                new User({
                    name: "Carl",
                    password: md5("password")
                }).save();
            }
            u.push({ 'state': u.length });
            res.send(u);
        }
    });
});

router.post('/test', function (req, res) {
    res.send(req.body);
});

router.post('/login', function(req, res) {
    var username = req.body.username;
    var password = md5(req.body.password.toLowerCase());
    User.find({ name: username }, function(e, u) {
        if (u.length == 0) res.send(false);
        res.send(u[0].password == password);
    });
});
module.exports = router;
