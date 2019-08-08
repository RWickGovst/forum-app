// dependencies
const mongoose = require('mongoose');

// file imports
const db = require('../models');

const DBNAME = 'forumApp'

// connect to mongo db
mongoose.connect(
    process.env.MONGODB_URI || `mongodb://localhost/${DBNAME}`, {
      useCreateIndex: true,
      useNewUrlParser: true
  }
);

// dummy data
const userSeed =
    {
        name: "Steve Holt",
        password: "password",
        userName: "s_holt",
        userEmail: "sholt@gmail.com",
        // picture: "/pic.jpg",
    }

db.User
    .remove({}) // drop table if exists
          .then(() => {
            db.User.create({userSeed})
          }).then(userDataInserted => {
            console.log('success')
            process.exit(0);
          }).catch(err => {
            console.log(err);
            process.exit(1);
          })