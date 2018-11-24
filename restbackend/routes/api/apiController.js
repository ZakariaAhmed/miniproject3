var express = require('express');
var apiRouter = express.Router();
var loginRouter = require('./login');
var userRouter = require('./users');

apiRouter.use('/login', loginRouter);
apiRouter.use('/users', userRouter);


module.exports = apiRouter