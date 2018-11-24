var Position = require('../models/position');
var userFacade = require('../facades/userFacade');


const addUserPosition = (user_id, created, longitude, latitude) => {
    let userPosition = {
        user:user_id,
        created:created,
        loc:{
            type:'Point',
            coordinates:[longitude, longitude]
        }
    }
    const position = new Position(userPosition);
    position.save();
}

const findPositionByUserId = async (id) => {
    let position = await Position.findOne({'user':id});
    return position;
}


module.exports = {
    addUserPosition:addUserPosition,
    findPositionByUserId:findPositionByUserId
};


