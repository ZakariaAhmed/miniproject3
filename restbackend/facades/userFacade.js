var mongoose = require('mongoose');
var User = require('../models/user');

function getAllUsers(){
    return User.find({}).exec();
}

function addUser(firstname, lastname, username, password, email) {
    var userDetail = { firstname, lastname, username, email, password};
    var user = new User(userDetail);
    return user.save();
  }

  function findByUsername(username) {
    var user = User.findOne({username: username}).exec();
    
    return user;
  }
    
  function findById(id) {
  
    return User.findById({ _id:id }).exec();
  }

  module.exports = {
    getAllUsers: getAllUsers,
    addUser: addUser,
    findByUsername: findByUsername,
    findById: findById,
  }