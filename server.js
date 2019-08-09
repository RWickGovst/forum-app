// dependencies
const express  = require ("express");
const mongoose = require ("mongoose");
var logger = require("morgan");
// file imports
const routes = require("./routes");
var db = require("./models");
// express instance
const app = express();

// assign a port
const PORT = process.env.PORT || 3001;

// configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// add routes, API and view
app.use(routes);
app.use(logger("dev"));
const DBNAME = 'forumApp'

mongoose.connect(
    process.env.MONGODB_URI || `mongodb://localhost/${DBNAME}`, {
        useCreateIndex: true,
        useNewUrlParser: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function(){
    console.log("Connected to MongoDb");
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost/${PORT}`);
})