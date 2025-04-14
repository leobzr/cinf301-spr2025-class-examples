'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3020;
const HOST = '0.0.0.0';

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
})

var setting = false;
/*
 * Note that you cannot res.send() twice, so need
 * the conditional.
 */
app.get("/", (req, res, next) => {
  console.log('In first / get');
  if (setting) {
    res.send("Hello world!\n");
  }
  else {
    next();
  }
}, (req, res, next) => {
  console.log('In second / get');
  res.send("Goodbye world!\n");
}
);

/*
 * Add one route with parameters
 */
app.use('/user', function (req, res, next) {
  console.log('In /user without params');
  next();
});

app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.post('/user', function (req, res, next) {
  console.log('Post body: ', req.body);
  res.send("Body sent");
  next();
});

app.get("/user/:userId/books/:booksId", (req, res) => {
  res.send(req.params);
});

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.write('User Info userID: ');
  next();
});

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.write(req.params.id);
  res.end();
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

