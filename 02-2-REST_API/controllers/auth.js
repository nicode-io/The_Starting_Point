//* IMPORTS

// Import third-party packages
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import project files
const User = require('../models/user');


//* POST

// User login
exports.login = ( req, res, next ) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;

  User.findOne({ email: email })
    .then(user => {
      if ( !user ) {
        const error = new Error('User not find');
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      if ( !isEqual ) {
        const error = new Error('Wrong password');
        error.statusCode = 401;
        throw error;
      }
      // Generate a new web token
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString()
        },
        'secretOrPrivateServerKey',
        {
          expiresIn: '1h'
        }
      );
      res.status(200).json({
        token: token,
        userId: loadedUser._id.toString()
      });
    })
    .catch(err => {
      if ( !err.statusCode ) {
        err.statusCode = 500;
      }
      next(err);
    });
};


//* PUT

// User signup
exports.signup = ( req, res, next ) => {
  const errors = validationResult(req);
  if ( !errors.isEmpty() ) {
    const error = new Error('Validation failed');
    error.statusCode = 422;
    // Keep errors
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  bcrypt.hash(password, 12)
    .then(hashedPwd => {
      const user = new User({
        email: email,
        password: hashedPwd,
        name: name,
      });
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: 'User successfully created',
        userId: result._id,
      });
    })
    .catch(err => {
      if ( !err.statusCode ) {
        err.statusCode = 500;
      }
      next(err);
    });

};
