// dependencies
const mongoose = require('mongoose');

//schema instance
const Schema = mongoose.Schema;

//new Schema = Post
const postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    like: {
        type: Boolean,
        required: false
    },
    picture: {
        imageURL: String
    }
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;