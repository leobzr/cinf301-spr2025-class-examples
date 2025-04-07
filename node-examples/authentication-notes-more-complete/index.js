const fs = require("fs");
const http = require("http");
const https = require("https");

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const authRoute = require("./routes/auth.routes");
const usersRoute = require("./routes/user.routes");
const moviesRoute = require("./routes/movie.routes");
const notesRoute = require("./routes/note.routes");
const config = require("./config");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api", usersRoute);
app.use("/api", moviesRoute);
app.use("/api", notesRoute);

mongoose.connect(config.DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("open", () => {
  console.log("Database started successfully");
});

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(
//   {
//     key: fs.readFileSync("./ssl/privatekey.pem"),
//     cert: fs.readFileSync("./ssl/certificate.pem"),
//   },
//   app
// ); 

httpServer.listen(config.PORT, () => {
  console.log(`Server is listening on port: ${config.PORT}`);
});

// httpsServer.listen(config.SECURE_PORT, () => {
//   console.log(`Secure server is listening on port: ${config.SECURE_PORT}`);
// });
