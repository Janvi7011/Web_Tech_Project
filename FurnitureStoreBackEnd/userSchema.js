const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phoneno: Number,
    address:String,
    username: String,
    password: String,
    role: String,
    createdAt: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;