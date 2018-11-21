var mongoose = require('mongoose');
var User = require('../models/user.js');
var Position = require('../models/position.js');



// utility method that will find all nearby friends given a position and distance
async function find_nearby_friends(position, dist){
    console.log('User Position ='+position.user);

    var friendsPositions = await Position.find(
        
    )
}

async function login(username, password, longitude, latitude, distance){
    var user = await User.findOne({userName: username}).exec();
    
    // Check to see if we got any user.
    if (user==null) {
        return {
            msg:"Wrong UserName Or Password", status: 401
        }
    }

    var salt_password = "hash_me_and_add_some_salt "+password;
    // If we do, check if password matches
    if (user.password == salt_password) {
        //const position = await Position.findOneAndUpdate({user: user._id}, {loc:{type:"Point", coordinates:[longitude, latitude], created:Date.now()}, upsert:true, new:true}).exec();
        //var friends = await find_nearby_friends(position, distance);
         return {friends: 'it works'}
    }  else {
        return {
            msg:"Wrong Password, Please Try Again", status:401
        }
    }
}


module.exports = {
    login:login,
}