import User from './user.model.js';

// Create and Save a new User
export const create = (req, res) => {
    // Validate request
    if (!req.body.user_name || !req.body.first_name || !req.body.last_name ) {
        return res.status(400).send({
            message: "All fields are required"
        });
    }

    // Create a User
    const user = new User({
        user_name: req.body.user_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age
    });

    // Save User in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            if (err.code === 11000) {
                return res.status(400).send({
                    message: "User with this user_name already exists"
                });
            }
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve and return all users from the database.
export const findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

// Find a single user with a username
export const findOne = (req, res) => {
    User.findOne({ user_name: req.params.username })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with username " + req.params.username
                });
            }
            res.send(user);
        }).catch(err => {
            return res.status(500).send({
                message: "Error retrieving user with username " + req.params.username
            });
        });
};

// Update a user identified by the username in the request
export const update = (req, res) => {
    // Validate Request
    if (!req.body.user_name || !req.body.first_name || !req.body.last_name) {
        return res.status(400).send({
            message: "username, first_name, and last_name fields are required"
        });
    }

    // Find user and update it with the request body
    User.findOneAndUpdate({ user_name: req.params.username }, {
        user_name: req.body.user_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age
    }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with username " + req.params.username
                });
            }
            res.send(user);
        }).catch(err => {
            return res.status(500).send({
                message: "Error updating user with username " + req.params.username
            });
        });
};

// Delete a user with the specified username in the request
export const deleteUser = (req, res) => {
    User.findOneAndDelete({ user_name: req.params.username })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with username " + req.params.username
                });
            }
            res.send({ message: "User deleted successfully!" });
        }).catch(err => {
            return res.status(500).send({
                message: "Could not delete user with username " + req.params.username
            });
        });
};

export default {
    create,
    findAll,
    findOne,
    update,
    deleteUser
};
