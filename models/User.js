const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,

    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        trim: true,
    },
    role: {
        enum: ["basic", "admin"],
        default: "basic",
        type: String,
        trim: true,
    }

}, { timestamps: true })


module.exports = mongoose.models.User || mongoose.model('User', UserSchema)