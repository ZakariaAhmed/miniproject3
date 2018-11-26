var express = require('express');
var userRouter = express.Router();
var userFacade = require('../../facades/userFacade');


userRouter.get('/', async (req, res, next) => {
    
    let users = await userFacade.getAllUsers();

    res.json(users);
}); 


// Add new user
userRouter.post('/', async (req, res, next) => {
    const {username, password, firstname, lastname, email} = req.body;
    let response = await userFacade.addUser(firstname, lastname, username, password, email);
    res.json(response); 
})


// userRouter.get('/', function (req, res, next){
//     res.json('Users');
// })

// add user
// 



module.exports = userRouter;