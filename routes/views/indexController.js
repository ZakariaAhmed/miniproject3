var express = require('express');
var viewRouter = express.Router();
var indexRouter = require('./index');

viewRouter.use('/', indexRouter);



module.exports = viewRouter;