const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDbStore = require('connect-mongodb-session')(session); // Store session created by express-session into MongoDbStore
const csrf = require('csurf');
const flash = require('connect-flash');

const secret = require('./secret');
const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();
const store = new MongoDbStore({
  uri: secret.getDb(),
  collection: 'sessions',
}); // Create object which use database and connect-mongodb-session

// Initialise CSRF token
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
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

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    secret.getDb(),
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    app.listen(3000);
    console.log('App Connected');
  })
  .catch(err => {
    console.log(err);
  });
