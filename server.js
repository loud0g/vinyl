var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);

var port = process.env.PORT || 80;

if (app.get('env') === 'development') {
	var logger = require('morgan');
	app.use(logger('dev'));
	port = 3000;
}

app.use(express.static(path.join(__dirname,'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message,
			error: {}
		}
	});
});

http.listen(port, function() {
    console.log('Listening on *:' + port);
});