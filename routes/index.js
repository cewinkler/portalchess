var express = require('express');
var router = express.Router();

exports.index = function (req, res) {
    res.locals = {
        title: 'PortalChess',
        username: req.session.username
};
    return res.render('index/index', {
        partials: {
            layout: 'layout',
            partial: 'index/_test'
        }
    });
};
