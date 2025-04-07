const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const middleware = require("../middlewares");
const config = require("../config");

router.get(
  "/users",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  userController.findAll
);

router.get(
  "/users/:id",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  userController.findOne
);

router.put(
  "/users/:id",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  userController.update
);

router.delete(
  "/users/:id",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  userController.delete
);

module.exports = router;
