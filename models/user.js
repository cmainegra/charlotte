var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    profileId: {
        type: String
    },
    email: {
        type: String
    }
});
