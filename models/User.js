const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true,
        trim: true,    
    },
    role: {
        enum:["basic","admin"],
        default:"basic",
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    password:{
        type : String,
        required: [true, 'Please add a password'],
    }
    
}, {timestamps: true})


module.exports = mongoose.models.User || mongoose.model('User', UserSchema)