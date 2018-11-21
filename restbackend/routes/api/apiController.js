var express = require('express');
var apiRouter = express.Router();
var loginRouter = require('./login');

apiRouter.use('/login', loginRouter);

module.exports = apiRouter