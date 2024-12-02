var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cafeDB')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err.message))

var adminRouter = require('./routes/admin');
var tableRouter = require('./routes/table');
var reservationRouter = require('./routes/reservation');
var clientRouter = require('./routes/client');
var menuRouter = require('./routes/menuItem');
var orderRouter = require('./routes/order');
var paymentRouter = require('./routes/payment');
var discountRouter = require('./routes/discount');
var reviewRouter = require('./routes/review');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/table', tableRouter);
app.use('/reservation', reservationRouter);
app.use('/admin', adminRouter);
app.use('/client', clientRouter);
app.use('/menuItem', menuRouter);
app.use('/order', orderRouter);
app.use('/payment', paymentRouter);
app.use('/discount', discountRouter);
app.use('/review', reviewRouter);

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
