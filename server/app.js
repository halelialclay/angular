var createError = require('http-errors');
var express = require('express');
var session = require('express-session')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongo = require('mongodb');
const mongoose = require('mongoose');

var checkLoggin = function(req, res, next){
  //console.log("***************************************************************");
  //console.log(req.originalUrl);
  if(req.originalUrl.indexOf("/api/login")<0 && req.session.user==null)
    res.send({loggedin:false})
  else
    next();
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var dividersRouter = require('./routes/dividers');
var address= require('./routes/address.js');
var dividerRouter = require('./routes/divider.js');
var settInIsrael= require('./routes/settInIsrael');
var SettFromeDate= require('./routes/SettFromeDate');
var divByDate= require('./routes/divByDate');
var dividersesForAdd= require('./routes/dividersesForAdd.js');
var deleteAddr=require('./routes/deleteAddr.js');
var blog=require('./routes/blog');
var checkAddress=require('./routes/checkAddress.js');
var statistic=require('./routes/statistic.js');

var management=require('./routes/management.js');

var message=require('./routes/message.js');

var app = express();
app.use(session({secret:"hahaha"}))

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.use(checkLoggin);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/dividers', dividersRouter);
app.use('/api/divider', dividerRouter);
app.use('/api/settInIsrael', settInIsrael);
app.use('/api/SettFromeDate', SettFromeDate);
app.use('/api/address', address);
app.use('/api/deleteAddr', deleteAddr);
app.use('/api/divByDate', divByDate);
app.use('/api/dividersesForAdd', dividersesForAdd);
app.use('/api/checkAddress',checkAddress);
app.use('/api/blog',blog);
app.use('/api/statistic',statistic);
app.use('/api/management',management);
app.use('/api/message',message);

const port = 3000;
var mongoDB ='mongodb://localhost:27017/local';
mongoose.connect(mongoDB,{ useNewUrlParser: true, useFindAndModify: false ,useUnifiedTopology : true},()=>{
  console.log("conncted to DB");
});
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
