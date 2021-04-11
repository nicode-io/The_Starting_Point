//* IMPORTS

// Import build-ine Node packages
const path = require('path');

// Import third-party packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');

// Import project files
const feedRoutes = require('./routes/feed');
const secret = require("./secret");


//* APP CREATION / CONFIGURATION

// Create express application
const app = express();

// Configure Multer
const fileStorage = multer.diskStorage({
  destination: ( req, file, cb ) => {
    cb(null, 'images');
  },
  filename: ( req, file, cb ) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const fileFilter = ( req, file, cb ) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/gif'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

//* APP MIDDLEWARES

// API parser, only JSON in/out
app.use(bodyParser.json());

// API binaries parser (Multer)
app.use(multer({ storage: fileStorage, fileFilter: fileFilter })
  .single('image'))

// Serve 'images' folder statically
app.use('/images', express.static(path.join(__dirname, 'images')));

// Manage CORS errors
app.use(( req, res, next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Router
app.use('/feed', feedRoutes);

// Error Handler (has priority)
app.use(( error, req, res, next ) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  // Send http response status and error message
  res.status(status).json({ message: message });
});


//* DATABASE CONNECTION

mongoose
  .connect(
    secret.getMongoDbApi(),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(result => {
    app.listen(8080);
    console.log('REST Api Connected');
  })
  .catch(err => {
    console.log(err);
  });
