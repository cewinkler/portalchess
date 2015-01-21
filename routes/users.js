var express = require('express');
var router = express.Router();
var _ = require('lodash');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

var mongoose = require('mongoose');
var db = mongoose.connection;
var userSchema = mongoose.userSchema({
    username: String,
    password: String,
});
var User = mongoose.model('User', userSchema);


/* GET users listing. */
router.get('/', function (req, res) {
    async (function() {
        await(function () { db.once('open'); });

    });
  res.send('respond with a resource');
});

module.exports = router;
