var express = require('express');
var userRouter = express.Router();
var userFacade = require('../../facades/userFacade');


userRouter.get('/', async function (req, res, next){
    res.json(await userFacade.getAllUsers());
})



// userRouter.get('/', function (req, res, next){
//     res.json('Users');
// })


module.exports = userRouter;