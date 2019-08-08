// dependencies
const router = require ('express').Router();
const path = require('path');

// file imports
const apiRoutes = require('./api');

// routes
router.use('/api', apiRoutes);

// any other route send them to build index.html
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
});

// export it
module.exports = router;
