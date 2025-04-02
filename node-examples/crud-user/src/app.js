import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './api/users/user.routes.js';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong!' });
});

mongoose.connect("mongodb://localhost:27017/crud-user").then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

