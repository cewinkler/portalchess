var express = require('express');
var router = express.Router();
var db = require('mongoose').connection;
var async = require('asyncawait/async');
var await = require('asyncawait/await');

exports.index = function (req, res) {
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
