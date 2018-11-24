var makeTestData = require('../makeTestData');
const dbSetup = require("../dbSetup");


// root level hooks
before(async function(){
  await makeTestData();
 })

 after(async function(){
   await dbSetup.closeConnection();
 })