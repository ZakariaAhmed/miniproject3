const expect = require('chai').expect;
var loginFacade = require('../facades/loginFacade');
var userFacade = require('../facades/userFacade');
var positionFacade = require("../facades/positionFacade");
var User = require('../models/user');

describe('API Login Testing', function(){
    // this.timeout(5000);
    // // make testData connects to our database and creates dummydata 
    // before(async function(){
    //     // our dbSetup 
    //      await makeTestData();
    // });

    // after(async function(){
    //     // connection close
    //    await dbSetup.closeConnection();
    // });

    it('Should sign in provided correct username and password', async function(){
        // sign in on 
        let response = await loginFacade.login("za37", "abc123", 10, 11, 500);
        expect(response.status).to.be.equal(200);
    });

    it("Should update longitude and latitude for user, testing update position at login()", async function(){

        let response = await loginFacade.login("za37", "abc123", 12.12, 11.11, 5000);
        const user = await userFacade.findByUsername("za37");
        const position = await positionFacade.findPositionByUserId(user._id);
        
        expect(position.loc.coordinates[0]).to.be.equal(11.11);
    });



})