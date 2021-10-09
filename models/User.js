const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,    
    },
    role: {
        enum:["basic","admin"],
        default:"basic",
        type: String,
        required: [true, 'Please add a role'],
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