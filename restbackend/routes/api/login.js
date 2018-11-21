var express = require('express');
var loginRouter = express.Router();
var loginFacade = require("../../facades/loginFacade.js");

/* async example */
// router.get("/", async (req, res, next) => {
//     res.send({some: "json"});
//   /*res.json(someJSONObject);*/
// })


loginRouter.get("/", async(req, res, next) => {
     
     res.send({some: "json"});

});



module.exports = loginRouter;