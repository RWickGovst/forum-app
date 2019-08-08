// dependencies
const router = require ('express').Router();
const path = require('path');

// file imports
const bookRoutes = require('./books.js')
// const anotherThingRoutes = require('./anotherThing.js')

// routes
// this is /api/books
router.use('/books', bookRoutes);
// this is /api/anotherThing
// router.use('/anotherThing', anotherThingRoutes);

// any other route send them to build index.html
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
});

// export it
module.exports = router;
