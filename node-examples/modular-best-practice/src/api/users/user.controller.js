import User from './user.model.js';
import { getAllUsers } from './user.service.js';

// user.controller.js: Handles HTTP requests and responses, such as parsing request data, 
// sending responses, and managing status codes.

// This function handles the request to get all users.
// It uses the service layer to get the users and sends them back as a JSON response.
// The controller layer is responsible for handling HTTP requests and responses.
// It can also include validation and transformation of data.
// The controller layer is a good place to put code that is specific to the HTTP request and response.
// The controller layer can also include middleware for authentication and authorization.
// The controller layer can be used to separate concerns and keep the code organized.
// The controller layer can also include error handling and logging.

export const getUsersHandler = async (req, res) => {
  const users = await getAllUsers(User);
  res.json(users);
};
