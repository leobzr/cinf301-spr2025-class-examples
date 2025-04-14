const Movie = require("../models/movie.model");

exports.create = (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    year: req.body.year,
    description: req.body.description,
    url: req.body.url,
    rating: req.body.rating,
    addedBy: req.query.userId,
  });

  // Save movie in the database
  movie
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  const filter = {};
  if (req.query.userId) {
    filter.addedBy = req.query.userId;
  }
  Movie.find(filter)
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findOne = (req, res) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        return res.status(404).send({
          message: "Movie not found",
        });
      }
      res.send(movie);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};

exports.update = (req, res) => {
  // Find and update the movie
  Movie.findByIdAndUpdate(req.params.movieId, {
    title: req.body.title || undefined,
    year: req.body.year || undefined,
    description: req.body.description || undefined,
    url: req.body.url || undefined,
    rating: req.body.rating || undefined,
    addedBy: req.body.addedBy || undefined,
  })
    .then((movie) => {
      if (!movie) {
        return res.status(404).send({
          message: "Movie not found",
        });
      }
      res.send({ message: "Movie updated successfully" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};

exports.delete = (req, res) => {
  Movie.findByIdAndRemove(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        return res.status(404).send({
          message: "Movie not found",
        });
      }
      res.send({ message: "Movie deleted successfully" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};
