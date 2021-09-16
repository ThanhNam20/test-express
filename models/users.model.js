
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    password: String,
    user_id: String
})

var User = mongoose.model('User', userSchema, 'users');
module.exports = User;