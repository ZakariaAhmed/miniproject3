var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbSetup = require('./dbSetup');
var TEST_DB_URI = require("./settings").TEST_DB_URI;
var DB_URI = require('./settings').DEV_DB_URI;
async function initTestDb(){
    await dbSetup.connect(TEST_DB_URI);
}
initTestDb();

var indexRouter = require('./routes/views/indexController');
var apiRouter = require('./routes/api/apiController');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

function clientErrorHandler (err, req, res, next){
    // if (req.xhr) {
    //     res.status(500).send({ error: 'Something failed!' })
    // } else {
    //     next(err)
    // }
    console.log('error')
    next()
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Error handlers
app.use(clientErrorHandler);



module.exports = app;
