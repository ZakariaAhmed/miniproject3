# miniproject3 The Backend part

#Managed to make 

Check whether the user exist, and if, that passwords matches. If not throw an error.
Update the position for the User. Use Position.findOneAndUpdate(....)  (provide it with the upsert option, so it will create the Document if it does not exist). Remember to update created also.

done;

Now create a utility method which will find all nearby friends given a point and dist (use this example as a template, but replace db.places with Position, since we are using mongoose, and rename location to loc  ).

done, 

The method implemented above will find all the nearby Position objects, but it will not populate it with User details. Se the section related to populate in the tutorial for how to do that:

done;

Finally use map on the list of friends to reformat it as requested for the endpoint

not done;

IMPORTANT: Add this line below your PostionSchema, in order to create the required 2dsphere index: PositionSchema.index({ loc: "2dsphere" },{ "background": true });

done;

deployed backend on https://polar-hollows-16046.herokuapp.com/
