// dependencies
const router = require('express').Router();
const postControllers = require("../../controllers/postController");

// file imports
const postController = require('../../controllers/postController');

router.route('/technology')
    .get(postController.newTechnology);

//politics, nyt gotta find//did this
// router.route('/politics')
//     .get(postController.newPolitics);

// matches with /api/
// router.route('/')
    // .get(booksController.findAll);

// matches with /api/books/:id
// router.route('/:id')
    // .get(booksController.findById)
    // .post(booksController.addBook)
    // .put(booksController.updateBook)
    // .delete(booksController.deleteById);
router.route("/")
.post(postControllers.createPost);

module.exports = router;