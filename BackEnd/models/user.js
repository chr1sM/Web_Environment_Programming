var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F"],
        default: "M",
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    permission: {
        type: Number,
        default: 2
    }
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model("users", UserSchema);
