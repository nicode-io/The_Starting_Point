const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/routes');

var whitelist = ['http://localhost:3000', 'http://127.0.0.1:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));
app.use('/', routes);
const database = "mongodb+srv://username:123password@cluster0.2sv4t.gcp.mongodb.net/fabulab?retryWrites=true&w=majority";
const port = process.env.PORT || 8080;

mongoose
    .connect(database, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => {
        app.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
    })
    .catch((err) => {
        console.log(err);
    });