var mongoose = require('mongoose');
var User = require('../models/user');

function getAllUsers(){
    return User.find({}).exec();
}

function addUser(firstName, lastName, userName, password, email) {
    var userDetail = { firstName, lastName, userName, email, password};
    var user = new User(userDetail);
    return user.save();
  }

  function findByUsername(username) {
    var user = User.findOne({userName: username}).exec();
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