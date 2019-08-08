// dependencies
const router = require('express').Router();

// file imports
const userController = require('../../controllers/booksController');

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