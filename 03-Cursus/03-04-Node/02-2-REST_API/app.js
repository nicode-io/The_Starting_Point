//* IMPORTS

// Import build-ine Node packages
const path = require('path');

// Import third-party packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

// Import project files
const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');
const secret = require('./secret');


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
};

// Configure Socket.IO

//* APP MIDDLEWARES

// CORS handler
app.use(cors());

// API parser, only JSON in/out
app.use(bodyParser.json());

// API binaries parser (Multer)
app.use(multer({
  storage: fileStorage,
  fileFilter: fileFilter
})
  .single('image'));

// Serve 'images' folder statically
app.use('/images', express.static(path.join(__dirname, 'images')));

// Manage CORS errors
app.use(( req, res, next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

// Routers
app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);

// Error Handler (has priority)
app.use(( error, req, res, next ) => {
  console.log(error);
  // || 500 => If not set, default will be 500
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  // Send http response status and error message
  res.status(status).json({
    message: message,
    data: data
  });
});


//* APPLICATION / DATABASE CONNECTION

const connect = async () => {
  try {
    await mongoose.connect(
      secret.getMongoDbApi(),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    );
    const server = app.listen(8080);
    console.log('REST Api Connected');
    // Create Socket.IO connection
    const io = require('./socket').init(
      server,
      options = {
        cors: true,
        origins: [ 'http://127.0.0.1:3000' ],
      }
    );
    // Wait for client connection
    io.on('connection', socket => {
      console.log('IO - Client connected');
    });
  }
  catch ( err ) {
    console.log(err);
  }
};
connect();
