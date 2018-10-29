var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = newSchema({
    profileId: {
        type: String
    },
    email: {
        type: String
    }
})