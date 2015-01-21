var express = require('express');
var router = express.Router();
var db = mongoose.connection;


exports.index = function(req, res) {
    res.locals = {
        title: 'PortalChess',

    };
    return res.render('index/index', {
        partials: {
            layout: 'layout',
            partial: 'index/_test'
        }
    });
};
