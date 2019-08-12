// dependencies
const router = require ('express').Router();
const path = require('path');

// file imports
const apiRoutes = require('./api');

// routes
router.use('/api', apiRoutes);

// any other route send them to build index.html
//does this need to be sent back to the route

// export it
module.exports = router;
