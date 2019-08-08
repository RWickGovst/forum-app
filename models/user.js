// dependencies
const mongoose = require('mongoose');

//schema instance
const Schema = mongoose.Schema;

//new Schema = Book
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    picture: {
        type: String, 
        required: false
    }
});
const User = mongoose.model('User', userSchema);

module.exports = User;