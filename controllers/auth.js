// Node build-in security token creator
const crypto = require('crypto');
// Used to secure password in database
const bcrypt = require('bcryptjs');
// Send emails
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

// Project imports
const User = require('../models/user');
const secret = require("../secret");

// Create transporter to manage email sending
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        secret.getSendgridApiKey()
    }
  })
);

exports.getLogin = ( req, res, next ) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = ( req, res, next ) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message
  });
};

exports.postLogin = ( req, res, next ) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({email: email})
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }
      // Check if password match the hash in database
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            // Create session
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = ( req, res, next ) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({email: email})
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      // Hash password
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          // Set values for database
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: {items: []}
          });
          // Save new user to database
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
          // Send account creation email
          return transporter.sendMail({
            to: email,
            from: 'welcome@nicode.io',
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = ( req, res, next ) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = ( req, res, next ) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
};

exports.postReset = (req, res, next) => {
  // Create security token
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    // Convert (from hex to string) and store token
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found.');
          return res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        res.redirect('/');
        transporter.sendMail({
          to: req.body.email,
          from: 'welcome@nicode.io',
          subject: 'Password reset',
          html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  // Grab token from request params (shown in URL)
  const token = req.params.token;
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        // Send data to views
        errorMessage: message,
        userId: user._id.toString(),
        passwordToken: token
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      // Store user to use it in next promise
      resetUser = user;

      return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
      // Set values for database
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      // Save values in database
      return resetUser.save();
    })
    .then(result => {
      res.redirect('/login');
      // Send password reset confirmation email
      transporter.sendMail({
        to: req.body.email,
        from: 'welcome@nicode.io',
        subject: 'Password reset success',
        html: `
            <p>Your password has been updated.</p>
          `
      });
    })
    .catch(err => {
      console.log(err);
    });
};
