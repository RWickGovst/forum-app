// dependencies
const router = require('express').Router();

// file imports
const postController = require('../../controllers/postController');

router.route('/technology')
    .get(postController.newTechnology);

// matches with /api/
// router.route('/')
    // .get(booksController.findAll);

// matches with /api/books/:id
// router.route('/:id')
    // .get(booksController.findById)
    // .post(booksController.addBook)
    // .put(booksController.updateBook)
    // .delete(booksController.deleteById);

module.exports = router;