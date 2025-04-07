const User = require("../models/user.model");

exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }
      res.send(user);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};

exports.update = (req, res) => {
  // Find and update the user
  User.findByIdAndUpdate(req.params.id, {
    email: req.body.email || undefined,
    firstName: req.body.firstName || undefined,
    lastName: req.body.lastName || undefined,
    address: req.body.address || undefined,
    phone: req.body.phone || undefined,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }
      res.send({ message: "User updated successfully" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }
      res.send({ message: "User deleted successfully" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};
