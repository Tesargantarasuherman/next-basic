const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: [true, 'Please add a email'],
        trim: true,
        dropDups: true
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true

    },
    role: {
        enum: ["basic", "admin"],
        default: "basic",
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        trim: true
    },
    token: {
        type: String,
        required:true,
        trim: true,
    },
}, { timestamps: true })


module.exports = mongoose.models.User || mongoose.model('User', UserSchema)