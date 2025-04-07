const mongoose = require("mongoose");
const config = require("../config");

const userModel = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [config.ROLES.ADMIN, config.ROLES.USER],
    default: config.ROLES.USER,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("User", userModel);
