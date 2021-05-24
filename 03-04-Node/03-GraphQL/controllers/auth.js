//* IMPORTS

// Import third-party packages
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import project files
const User = require('../models/user');


//* USER

// User login
exports.login = async ( req, res, next ) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email: email });
    if ( !user ) {
      const error = new Error('User not found');
      error.statusCode = 401;
      throw error;
    }

    const isEqual = await bcrypt.compare(password, user.password);

    if ( !isEqual ) {
      const error = new Error('Wrong password');
      error.statusCode = 401;
      throw error;
    }
    // Generate a new web token
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString()
      },
      'secretOrPrivateServerKey',
      {
        expiresIn: '1h'
      }
    );
    res.status(200).json({
      token: token,
      userId: user._id.toString()
    });
  }
  catch ( err ) {
    if ( !err.statusCode ) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// User signup
exports.signup = async ( req, res, next ) => {
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

  try {
    const hashedPwd = await bcrypt.hash(password, 12);

    const user = new User({
      email: email,
      password: hashedPwd,
      name: name,
    });
    const newUser = await user.save();

    res.status(201).json({
      message: 'User successfully created',
      userId: newUser._id.toString(),
    });
  }
  catch ( err ) {
    if ( !err.statusCode ) {
      err.statusCode = 500;
      next(err);
    }
  }
};
