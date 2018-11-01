var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var numberSchema = new Schema ({
    numbers: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.export = Number = mongoose.model('numbers', numberSchema);
// export default numberSchema;    