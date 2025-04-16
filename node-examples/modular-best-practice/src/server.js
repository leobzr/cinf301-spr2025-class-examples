import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

// This file is the entry point for the application.
// It sets up the Express application and middleware.
// It also defines the routes for the application.
// The application can be started by importing this file and calling app.listen().
// The app.listen() method binds and listens for connections on the specified host and port.

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
