const expect = require("chai").expect;
var userFacade = require("../facades/userFacade.js");
var User = require("../models/user.js");


describe("Testing the User Facade", function(){
/* Connect to the TEST-DATABASE */
/* Setup the database in a known state (2 users) before EACH test */
// beforeEach(async function(){
//   await User.deleteMany({});
//   await Promise.all([
//     new User({ firstName: "Kurt", lastName: "Wonnegut", userName: "kw", password: "test", email: "a@b.dk" }).save(),
//     new User({ firstName: "Hanne", lastName: "Wonnegut", userName: "hw", password: "test", email: "b@b.dk" }).save(),
//     new User({ firstName: "Janne", lastName: "Wonnegut", userName: "jw", password: "test", email: "c@b.dk" }).save(),
//   ])
//   users = await userFacade.getAllUsers();
// })

it("Should find all 2 users created in makeTestData", async function(){
  let users = await userFacade.getAllUsers();

  expect(users.length).to.be.equal(2);
})

it("Should find user (Zakaria)", async function(){
    var user = await userFacade.findByUsername("za37");
    expect(user.username).to.be.equal("za37");
});


// after(async function(){
//   await dbSetup.closeConnection();
// })

})