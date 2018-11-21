require("./dbSetup.js")();
var mongoose = require("mongoose");
var loginFacade = require('./facades/loginFacade.js');
//var userFacade = require('./facades/userFacade.js'); 

mongoose.models = {};
mongoose.modelSchemas = {};
mongoose.connection = {};

// async function createUsers(){
//   await userFacade.addUser('weqweq', 'qweqe', 'wqeqweqwe', 'mypass', 'retertret@email.com');
// }

async function logsIn(){
 const loggedIn = await loginFacade.login('Tessdfdsf', 'sdfdsf');
 console.log(loggedIn);
}


//createUsers();


logsIn();

