const express = require('express');
const router = express.Router();
const noteController = require("../controllers/note.controller");
const middleware = require("../middlewares");
const config = require("../config");

router.post(
    "/notes",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    noteController.create
);
router.get("/notes", middleware.verify, noteController.findAll);

router.get(
    "/notes/user",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    noteController.findAll
);

router.get(
    "/notes/:noteId",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    noteController.findOne
);

router.put(
    "/notes/:noteId",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    noteController.update
);

router.delete(
    "/notes/:noteId",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    noteController.delete
);

module.exports = router;
