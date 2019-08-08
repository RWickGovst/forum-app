// dependencies
const router = require('express').Router();

// file imports
const booksController = require('../../controllers/booksController');

// matches with /api/books
router.route('/')
    .get(booksController.findAll);

// matches with /api/books/:id
router.route('/:id')
    .get(booksController.findById)
    .post(booksController.addBook)
    .put(booksController.updateBook)
    .delete(booksController.deleteById);

module.exports = router;