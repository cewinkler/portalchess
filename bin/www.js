#!/usr/bin/env node

var debug = require('debug')('portalchess');
var app = require('../app');

app.set('port', process.env.PORT || 81);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
