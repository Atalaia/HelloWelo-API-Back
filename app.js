var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bikeRidesRouter = require('./routes/bikerides');
var citiesRouter = require('./routes/cities');
var statesRouter = require('./routes/states');
var countriesRouter = require('./routes/countries');
var statusRidesRouter = require('./routes/statusrides');
var levelRouter = require('./routes/levels');
var typeRouter = require('./routes/types');
var roleRouter = require('./routes/roles');
var participantRouter = require('./routes/participants');
var userRoleRouter = require('./routes/userroles');
var commentRouter = require('./routes/comments');
var contactRouter = require('./routes/contacts');

var app = express();
require('dotenv').config({ path: __dirname + '/.env' });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bikerides', bikeRidesRouter);
app.use('/cities', citiesRouter);
app.use('/states', statesRouter);
app.use('/countries', countriesRouter);
app.use('/statusrides', statusRidesRouter);
app.use('/levels', levelRouter);
app.use('/types', typeRouter);
app.use('/roles', roleRouter);
app.use('/participants', participantRouter);
app.use('/userroles', userRoleRouter);
app.use('/comments', commentRouter);
app.use('/contacts', contactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
