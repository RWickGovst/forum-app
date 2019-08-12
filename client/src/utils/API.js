import axios from "axios";

export default{
    createPost: function(postData){
        return axios.post("/api/post", postData);
    }
}


// dependencies
// const router = require('express').Router();
// const postControllers = require("../../controllers/postController");

// file imports
// const postController = require('../../controllers/postController');

// router.route('/technology')
//     .get(postController.newTechnology);
// router.route("/")
// .post(postControllers.createPost);

// module.exports = router;