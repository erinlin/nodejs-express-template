/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
	app.use(express.logger({ format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :response-time ms' }))
	app.use(express.static(__dirname + '/public'));
  app.use(app.router);
	app.set('appname', 'template');
});

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){ 
	app.use(express.errorHandler()); 
});

// Routes
require('./route')(app);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
