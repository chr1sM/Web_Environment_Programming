var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    email: {type:String,
            required:true
        },
    password: {
            type:String,
            required:true
        },
    permission: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('admins', adminSchema);