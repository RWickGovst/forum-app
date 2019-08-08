// dependencies
const mongoose = require('mongoose');

// file imports
const db = require('../models');

const DBNAME = 'practice-react-app'

// connect to mongo db
mongoose.connect(
    process.env.MONGODB_URI || `mongodb://localhost/${DBNAME}`
);

// dummy data
const bookSeed = [
    {
        title: "The Dead Zone",
        author: "Stephen King"
      },
      {
        title: "Lord of the Flies",
        author: "William Golding"
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
      },
      {
        title: "The Punch Escrow",
        author: "Tal M. Klein"
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
      }
]

db.Book
    .remove({}) // drop table if exists
          .then(() => {
            db.Book.collection.insertMany(bookSeed)
          }).then(bookDataInserted => {
            console.log(`$ {bookDataInserted.result.n}
              records inserted`)
            process.exit(0);
          }).catch(err => {
            console.log(err);
            process.exit(1);
          })









