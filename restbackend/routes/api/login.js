var express = require('express');
var loginRouter = express.Router();
var loginFacade = require('../../facades/loginFacade');

/* async example */
// router.get("/", async (req, res, next) => {
//     res.send({some: "json"});
//   /*res.json(someJSONObject);*/
// })



// Login
loginRouter.post('/', async function (req, res, next) { 
     const {username, password, longitude, latitude, distance} = req.body
     const user  = await loginFacade.login(username, password, longitude, latitude, distance);

     return res.json(user);
 });






module.exports = loginRouter;