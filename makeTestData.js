const expect = require("chai").expect;
const dbSetup = require('./dbSetup')
var TEST_DB_URI = require("./settings").TEST_DB_URI;
var User = require("./models/user.js");
var LocationBlog = require('./models/locationBlog.js');
var Position = require('./models/position.js');

// making our connection to the test Database
async function initTestDb(){
    await dbSetup.connect(TEST_DB_URI);
}

initTestDb();

//Utility Function to create users
function userCreate(firstname, lastname, username, password, email, type, company, companyUrl) {
    var job = [{ type, company, companyUrl }, { type, company, companyUrl }];
    var userDetail = { firstname, lastname, username, email, password, job };
    var user = new User(userDetail);
    return user.save();
  }
  
  //Utility Function to create Positions
  function positionCreator(lon, lat, userId, dateInFuture) {
    var posDetail = { user: userId, loc: { coordinates: [lon, lat] } }
    if (dateInFuture) {
      posDetail.created = "2022-09-25T20:40:21.899Z"
    }
    var pos = new Position(posDetail);
    return pos.save();
  }
  //Utility Function to create LocationBlogs
  function locationBlogCreator(info, author, longitude, latitude) {
    var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    var blog = new LocationBlog(LocationBlogDetail);
    return blog.save();
  }

  async function createUsers() {
      // resets all entities in database
      await User.deleteMany({}).exec();
      await Position.deleteMany({}).exec();
      await LocationBlog.deleteMany({}).exec();


      const userPromises = [
        userCreate("Zakaria", "Ahmed", "za37", "abc123", "myemail@email.com", "programmer", "OmnicomMediaGroup", "http://omnicommediagroup.com/"),
        userCreate("Test", "Testersen", "tt", "testPass", "test@test.dk", "developer", "Amazon", "amazon.com")
      ]

      var users = await Promise.all(userPromises);

      var positionPromises = [
        positionCreator(10, 11, users[0]._id, true),
        positionCreator(13, 14, users[1]._id, true),
      ]

      var positions = await Promise.all(positionPromises);

      try {
        var blogPromises = [
          locationBlogCreator("Cool Place", users[0]._id, 26, 28),
          locationBlogCreator("Another Cool Place", users[1]._id, 56, 56)
        ];
        var blogs = await Promise.all(blogPromises);
      } catch (err) {
        console.log("UPPPS: ", err);
      }

      //Check the virtuals
  console.log("Slug for a Cool Place", blogs[0].slug);
 
  blogs[0].likedBy.push(users[0]); 
  blogs[0].likedBy.push(users[1]); 
  console.log("Likes for a Cool Place", blogs[0].likedByCount);

  }

  module.exports = createUsers