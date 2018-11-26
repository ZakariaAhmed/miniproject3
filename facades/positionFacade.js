var Position = require('../models/position');
var userFacade = require('../facades/userFacade');


const addUserPosition = (user_id, created, longitude, latitude) => {
    let userPosition = {
        user:user_id,
        created:created,
        loc:{
            type:'Point',
            coordinates:[longitude, latitude]
        } 
    };
    const position = new Position(userPosition);
    position.save();
}

const findPositionByUserId = async (id) => {
    let position = await Position.findOne({'user':id});
    return position;
}

const updateUserPosition = async (userId, longitude, latitude) => {

    let position = await Position.updateOne({user:userId}, {loc: {type:'Point', coordinates:{longitude, latitude}}});
    console.log('updated position');
    console.log(position);
    return position;
};


module.exports = {
    addUserPosition:addUserPosition,
    findPositionByUserId:findPositionByUserId,
    updateUserPosition:updateUserPosition
};


