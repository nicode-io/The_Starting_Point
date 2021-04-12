//* IMPORTS

// Import build-ine Node packages
const path = require('path');

// Import third-party packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const graphqlHttp = require('express-graphql').graphqlHTTP;

// Import project files
const secret = require('./secret');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const auth = require('./middleware/auth');
const { clearImage } = require('./util/file');


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

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Authentication
app.use(auth);

// Image management
app.put('/post-image', (req, res, next) => {
  if (!req.isAuth) {
    throw new Error('Not authenticated!');
  }
  if (!req.file) {
    return res.status(200).json({ message: 'No file provided!' });
  }
  if (req.body.oldPath) {
    clearImage(req.body.oldPath);
  }
  return res
    .status(201)
    .json({ message: 'File stored.', filePath: req.file.path });
});

// GraphQL
app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    customFormatErrorFn(err) {
      if (!err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || 'An error occurred.';
      const code = err.originalError.code || 500;
      return { message: message, status: code, data: data };
    }
  })
);

// Error Handler (has priority)
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
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
    app.listen(8080);
    console.log('REST Api Connected');
  }
  catch ( err ) {
    console.log(err);
  }
};
connect();
