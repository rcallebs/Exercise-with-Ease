var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
var logger = require("morgan");
const session = require('express-session');
const passport = require('passport');
const methodOverride = require("method-override");

require("dotenv").config();
require("./config/database");
require('./config/passport');

const indexRouter = require("./routes/index");
const workoutRouter = require("./routes/workouts");
const exerciseRouter = require("./routes/exercises")

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Mount middleware in the middleware/request pipeline
// app.use([starts with path], <middleware fn>) [, <middleware fn>])

app.use(function (req, res, next) {
  // Add a time property to the res.locals object
  // the time property will then be accessible within templates
  res.locals.time = new Date().toDateString();
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
  res.locals.user = req.user;
  next();
})

app.use("/", indexRouter);
app.use("/workouts", workoutRouter);
app.use("/exercises", exerciseRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
