import express from 'express';
import users from './user.controller.js';

const router = express.Router();

// Create a new User
router.post('/users', users.create);

// Retrieve all Users
router.get('/users', users.findAll);

// Retrieve a single User with username
router.get('/users/:username', users.findOne);

// Update a User with username
router.put('/users/:username', users.update);

// Delete a User with username
router.delete('/users/:username', users.deleteUser);

export default router;