const express = require("express");
const router = express.Router();
const middleware = require("../middlewares");
const authController = require("../controllers/auth.controller");

router.post("/login", authController.login);

router.post("/signup", authController.signup);

router.get("/user", middleware.verify, authController.getRequestUser);

router.get("/greetings", middleware.verify, authController.greetUser);

module.exports = router;
