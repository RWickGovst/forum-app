// dependencies
const router = require('express').Router();
// const postControllers = require("../../controllers/postController");

// file imports
const postControllers = require('../../controllers/postController');

router.route('/technology')
    .get(postControllers.newTechnology);
router.route("/")
.post(postControllers.createPost);

module.exports = router;