const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer');

const secret = require('./secret');
const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();
const store = new MongoDBStore({
  uri: secret.getDb(),
  collection: 'sessions',
}); // Create object which use database and connect-mongodb-session

// Initialise CSRF token
const csrfProtection = csrf();

// Configure a storage for binaries (multer)
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

// Configure file filter for binaries (multer)
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({extended: false}));
// User Multer to parse request with mix of text and binary inside
// params name need to match the field name in form
app.use(multer({
  storage: fileStorage,
  fileFilter: fileFilter
}).single('image'))

// Serve static file folders with the help of express
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
); // Express-Session middleware - Automatically set a cookie, use session 'store: store', secure with hash the user id
app.use(csrfProtection);
app.use(flash());

app.use(( req, res, next ) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use(( req, res, next ) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      // Store user in requests
      req.user = user;
      next();
    })
    .catch(err => {
      // Reach error handling middleware in promise
      next(new Error(err));
    });
});


app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get404);


// Add special middleware to handling errors
// Express will skip others middleware if an error is thrown
// If you have multiple error handling middleware they'll execute
// from top to bottom like "normal" middleware
app.use(( error, req, res, next ) => {
  res.status(500).render('500', {
    pageTitle: 'Error',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
  console.log(error);
})

mongoose
  .connect(
    secret.getDb(),
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(result => {
    app.listen(3000);
    console.log('App Connected');
  })
  .catch(err => {
    console.log(err);
  });
