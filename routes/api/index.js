// dependencies
const router = require ('express').Router();
const path = require('path');

// file imports
const userRoutes = require('./users.js')
const postRoutes = require('./post.js')

// routes
// this is /api/books
router.use('/users', userRoutes);

// this is /api/anotherThing
router.use('/post', postRoutes);

// any other route send them to build index.html
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'))
// });

// export it
module.exports = router;
