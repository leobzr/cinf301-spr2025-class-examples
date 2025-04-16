import express from 'express';
import { getUsersHandler } from './user.controller.js';

// This file defines the routes for the User model.
// It uses Express Router to define the routes.
// The routes are then exported for use in other parts of the application.
// The routes can be used to handle HTTP requests for the User model.
// The routes can be used to define the endpoints and HTTP methods (GET, POST, PUT, DELETE) for the API.

const router = express.Router();
router.get('/', getUsersHandler);

export default router;
