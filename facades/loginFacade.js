var mongoose = require('mongoose');
var User = require('../models/user.js');
var Position = require('../models/position.js');



// utility method that will find all nearby friends given a position and distance
async function find_nearby_friends(position, dist){

    console.log('user position ='+position[0]+':'+position[1]);
    console.log(dist)

    var friendsPositions = await Position.find(
        {
            loc:{
                $near:{
                    $geometry: { type: "Point",  coordinates: position  },
                    $minDistance: 0,
                    $maxDistance: dist
                }
            }
        }
    ).populate('user', {username: 1, _id: 0}).exec()

  console.log(friendsPositions);
    return friendsPositions;
}

async function login(username, password, latitude, longitude, distance){
    var user = await User.findOne({username: username}).exec();
    
    // Check to see if we got any user / should throw error, didnt get time to make exceptions
    if (user==null) {
        return {
            msg:"Wrong UserName Or Password", status: 403
        }
    }

    var salt_password = "hash_me_and_add_some_salt "+password;
    // If we do, check if password matches
    if (user.password == salt_password) {
        // update userposition
       const position = await Position.findOneAndUpdate({user: user._id}, {loc:{type:"Point", coordinates:[longitude, latitude], created:Date.now()}, upsert:true, new:true}).exec();
        
        // find nearby friends
       var friends = await find_nearby_friends(position.loc.coordinates, distance);

         return {status: 200}
    }  else {
        return {
            msg:"Wrong Password, Please Try Again", status:403
        }
    }
}


module.exports = {
    login:login,
}