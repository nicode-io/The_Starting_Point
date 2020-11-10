"use strict";

var express = require('express');

var cors = require('cors');

var mongoose = require('mongoose');

var app = express();

var routes = require('./routes/routes'); // Then pass them to cors:


app.use(cors());
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