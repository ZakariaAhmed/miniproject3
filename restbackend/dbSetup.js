var mongoose = require('mongoose');
const dbURI = require("./settings").DEV_DB_URI;


function connect(dbUriString){
  const conStr = dbUriString ? dbUriString : dbURI;
  // This returns a promise
 return mongoose.connect(conStr,{ useNewUrlParser: true, useCreateIndex: true }); 
}

mongoose.connection.once('connected', function () { 
 console.log('Connection occured');
});

mongoose.connection.once('error',function (err) { 
 console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.once('disconnected', function(){
  console.log(disconnected("Mongoose default connection is disconnected"));
});

module.exports = connect;