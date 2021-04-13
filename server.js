require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static('.'));

connectDB();

// Define middleware here
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(cookieParser(process.env.SECRET));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view soemthing
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});