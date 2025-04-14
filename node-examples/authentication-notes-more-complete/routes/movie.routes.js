const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");
const middleware = require("../middlewares");
const config = require("../config");

router.post(
  "/movies",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  movieController.create
);
router.get("/movies", middleware.verify, movieController.findAll);

router.get(
  "/movies/user",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  movieController.findAll
);

router.get(
  "/movies/:movieId",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  movieController.findOne
);

router.put(
  "/movies/:movieId",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  movieController.update
);

router.delete(
  "/movies/:movieId",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  movieController.delete
);

module.exports = router;
