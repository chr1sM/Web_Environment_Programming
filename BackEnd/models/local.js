var mongoose = require("mongoose");

var LocalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    desciption: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    user_id: {
        type: String
    }
});

mongoose.model('Local', LocalSchema);

module.exports = mongoose.model("local", LocalSchema);
