const expect = require("chai").expect;
const dbSetup = require("../dbSetup");
var TEST_DB_URI = require("../settings").TEST_DB_URI;
var userFacade = require("../facades/userFacade.js");
var User = require("../models/user.js");




describe("Testing the User Facade", function(){

/* Connect to the TEST-DATABASE */
before(async function(){
   dbSetup.setDbUri(TEST_DB_URI);
   await dbSetup.connect();   
})

after(async function(){
  await dbSetup.closeConnection();
})


/* Setup the database in a known state (2 users) before EACH test */
beforeEach(async function(){
  await User.deleteMany({});
  await Promise.all([
    new User({ firstName: "Kurt", lastName: "Wonnegut", userName: "kw", password: "test", email: "a@b.dk" }).save(),
    new User({ firstName: "Hanne", lastName: "Wonnegut", userName: "hw", password: "test", email: "b@b.dk" }).save(),
    new User({ firstName: "Janne", lastName: "Wonnegut", userName: "jw", password: "test", email: "c@b.dk" }).save(),
  ])
  users = await userFacade.getAllUsers();
})

it("Should find all users (Kurt and Hanne)", async function () {
    var users = await userFacade.getAllUsers();
    expect(users.length).to.be.equal(3);
  });


})