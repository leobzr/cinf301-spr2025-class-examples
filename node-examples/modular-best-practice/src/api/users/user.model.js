import mongoose from 'mongoose';

// This is a simple Mongoose model for a User. It defines a schema with a single field 'name' of type String.
// The model is then exported for use in other parts of the application.
// The schema can be extended with more fields and validation rules as needed.
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
// It provides a schema-based solution to model application data.
// Mongoose allows you to define schemas for your data, which can include validation, default values, and other features.
// The model can be used to create, read, update, and delete documents in the MongoDB database.
// This model can be used in the controller to interact with the database.

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', UserSchema);
export default User;
