const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    photo: String
});

module.exports = mongoose.model('User', userSchema);
