const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

//* MIDDLEWARES
// API parser, only JSON in/out
app.use(bodyParser.json());
// Middleware to manage CORS errors
app.use(( req, res, next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// Router
app.use('/feed', feedRoutes);

app.listen(8080);
