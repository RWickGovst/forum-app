// dependencies
const express  = require ("express");
const mongoose = require ("mongoose");
var logger = require("morgan");
const session = require('express-session')
const passport = require('./passport');
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)
// file imports
const routes = require("./routes");
var db = require("./models");

const user = require('./routes/userLogin')
// express instance
const app = express();

// assign a port
const PORT = process.env.PORT || 3001;

// configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// From official doc - https://github.com/jaredhanson/passport#middleware - To use Passport in an Express or Connect-based application, configure it with the required passport.initialize() middleware. If your application uses persistent login sessions (recommended, but not required), passport.session() middleware must also be used.
app.use(passport.initialize())

// Then start the passport session. The below code calls serializeUser and deserializeUser
app.use(passport.session())
// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// express-session management
app.use(
    session({
        secret: 'green-india',  //pick a random string to make the hash that is generated secure
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false,
        saveUninitialized: false
    })
)

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

app.use(user)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost/${PORT}`);
})