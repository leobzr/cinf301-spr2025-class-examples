import express from 'express';
import userRoutes from './api/users/user.routes.js';

// This file is the entry point for the application.
// It sets up the Express application and middleware.
// It also defines the routes for the application.
// The application can be started by importing this file and calling app.listen().

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default app;
