"use strict";

var express = require('express');

var session = require('express-session');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var cors = require('cors');

var mongoose = require('mongoose');

var app = express();

var routes = require('./routes/routes'); // Then pass them to cors:


app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  key: "userInfo",
  secret: "teamworkfablabproject2020",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 60 * 24
  }
}));
app.use('/', routes);
var database = "mongodb+srv://username:123password@cluster0.2sv4t.gcp.mongodb.net/fabulab?retryWrites=true&w=majority";
var port = process.env.PORT || 8080;
mongoose.connect(database, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}).then(function () {
  app.listen(port, function () {
    return console.log("Server and Database running on ".concat(port, ", http://localhost:").concat(port));
  });
})["catch"](function (err) {
  console.log(err);
});