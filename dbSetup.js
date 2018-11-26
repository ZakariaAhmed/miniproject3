var mongoose = require('mongoose');
const dbURI = require("./settings").DEV_DB_URI;

// getting rid of FindAndModify annoying warning
mongoose.set('useFindAndModify', false);



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


function closeConnection(){
  return mongoose.connection.close();
}

module.exports = {
  connect:connect,
  closeConnection:closeConnection
};