const jwt = require("jsonwebtoken");
const config = require("./config");

exports.verify = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) res.status(403).json({ error: "please provide a token" });
  else {
    jwt.verify(token.split(" ")[1], config.JWT.SECRET, (err, value) => {
      if (err) res.status(500).json({ error: "failed to authenticate token" });
      req.user = value.data;
      next();
    });
  }
};

exports.restrictToRoleOrSelf = (role) => {
  return (req, res, next) => {
    // Get user id from request
    let userId;
    if (req.route.path === "/users/:id") {
      userId = req.params.id;
    } else if (req.query) {
      userId = req.query.userId;
    }

    if (req.user.role === role || req.user._id === userId) {
      next();
    } else {
      res
        .status(403)
        .json({ error: "you are not authorized to perform this action" });
    }
  };
};
