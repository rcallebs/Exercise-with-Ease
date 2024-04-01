var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var workoutRouter = require('./routes/workouts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Mount middleware in the middleware/request pipeline
// app.use([starts with path], <middleware fn>) [, <middleware fn>])

app.use(function(req, res, next) {
  console.log('working');
  // Add a time property to the res.locals object
  // the time propterty will then be accessible within templates
  res.locals.time = new Date().toLocaleTimeString()
  next();
});

// Log in the terminal the HTTP request info
app.use(logger('dev'));
// Processes data sent in the body of the request if it's json
app.use(express.json());
// Processes data sent in 'form' body of the request
// it will create a property on req.body for each <input>, <select>, and/or <textarea>
//in the <form>
app.use(express.urlencoded({ extended: false }));
// Add a cookies property for each cookie sent in the request
app.use(cookieParser());
// If the request is for a static asset,returns the file
app.use(express.static(path.join(__dirname, 'public')));


//the first argument is the starts with path
//the paths within the routes modules are appened to the starts with paths
app.use('/', indexRouter);
app.use('/workouts', workoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
