//* IMPORTS

// Import third-party packages
const express = require('express');
const { body } = require('express-validator');

// Import project files
const authController = require('../controllers/auth');
const User = require('../models/user');

// Create express router
const router = express.Router();


//* POST

// POST /login
router.post('/login', authController.login);



//* PUT

// PUT /signup
router.put('/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom(( value, { req } ) => {
        return User.findOne({ email: value })
          .then(userDoc => {
            if ( userDoc ) {
              return Promise.reject('Email already exists');
            }
          });
      })
      .normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 5 }),
    body('name')
      .trim()
      .not().isEmpty()
  ],
  authController.signup
);


module.exports = router;
