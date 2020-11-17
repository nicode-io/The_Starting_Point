"use strict";

var User = require('../models/User');

exports.getAllUser = function _callee(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.find());

        case 3:
          users = _context.sent;
          res.json(users);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0); // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Method for the sessions


exports.getSessionUser = function (req, res) {
  if (req.session.user) {
    res.send({
      loggedIn: true,
      user: req.session.user
    });
  } else {
    res.send({
      loggedIn: false
    });
  }
};

exports.getUser = function _callee2(req, res) {
  var userId, user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          userId = req.params.userId;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findById(userId, function (user) {
            return user;
          }));

        case 4:
          user = _context2.sent;
          req.session.user = user;
          console.log(req.session.user);
          res.json(user);
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0); // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.postUser = function (req, res) {
  var _req$body = req.body,
      firstname = _req$body.firstname,
      lastname = _req$body.lastname,
      email = _req$body.email,
      password = _req$body.password,
      company = _req$body.company;

  try {
    var user = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      company: company
    });
    user.save(); // définir le comportement de l'app en cas de réussite
  } catch (error) {
    console.log(error); // définir le comportement de l'app en cas d'erreur
  }
}; // exports.getEditUser = (req, res) => {
//     // A GERE UNIQUEMENT ADMIN AURA DROIT
// }


exports.postEditUser = function (req, res) {
  // A GERE UNIQUEMENT ADMIN AURA DROIT
  var userId = req.body.petId;
  var _req$body2 = req.body,
      firstname = _req$body2.firstname,
      lastname = _req$body2.lastname,
      email = _req$body2.email,
      company = _req$body2.company;
  User.findById(userId).then(function (user) {
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.company = company;
    return user.save();
  }).then(function () {
    console.log('User Updated'); // définir le comportement de l'app en cas de réussite
  })["catch"](function (err) {
    console.log(err); // définir le comportement de l'app en cas d'erreur
  });
};

exports.postDeleteUser = function _callee3(req, res) {
  var userId, user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // A GERE UNIQUEMENT ADMIN AURA DROIT
          userId = req.body.userId;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findByIdAndDelete(userId, function (user) {
            return user;
          }));

        case 4:
          user = _context3.sent;
          console.log(user);
          console.log('User Deleted'); // définir le comportement de l'app en cas de réussite

          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0); // définir le comportement de l'app en cas d'erreur

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 9]]);
};