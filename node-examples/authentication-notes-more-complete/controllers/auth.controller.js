const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

// signup a user
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ error: "User with this email already exist." });
      }
      bcrypt.hash(req.body.password, config.BCRYPT.ROUNDS, (error, hash) => {
        if (error) res.status(500).json(error);
        else {
          const newUser = User({
            email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone,
          });
          newUser.save().then((user) => {
            res.status(200).json({ token: generateToken(user), id: user._id });
          });
        }
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

// login a user
exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user)
        res.status(404).json({ error: "No user with that email found" });
      else {
        bcrypt.compare(req.body.password, user.password, (error, match) => {
          if (error) res.status(500).json(error);
          else if (match)
            res.status(200).json({ token: generateToken(user), id: user._id });
          else res.status(403).json({ error: "Incorrect password" });
        });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

// Retrieve the user from the request
exports.getRequestUser = (req, res) => {
  res.status(200).json(req.user);
};

// Greet the user
exports.greetUser = (req, res) => {
  res.status(200).json({ message: "Hello, " + req.user.email });
};

function generateToken(user) {
  return jwt.sign({ data: user }, config.JWT.SECRET, {
    expiresIn: config.JWT.EXPIRATION_TIME,
  });
}
