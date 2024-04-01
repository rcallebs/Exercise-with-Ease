var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const methodOverride = require("method-override");

require('dotenv').config();
require("./config/database");
var indexRouter = require("./routes/index");
var workoutRouter = require("./routes/workouts");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Mount middleware in the middleware/request pipeline
// app.use([starts with path], <middleware fn>) [, <middleware fn>])

app.use(function (req, res, next) {
  console.log("working");
  // Add a time property to the res.locals object
  // the time property will then be accessible within templates
  res.locals.time = new Date().toLocaleTimeString();
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use("/workouts", workoutRouter);

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
