// user.service.js: Contains business logic, such as data validation, 
// transformations, and interactions with the model layer.

// This file contains the service layer for the User model.
// The service layer is responsible for business logic and data manipulation.
// It does not handle HTTP requests or responses, which are handled by the controller layer.
// It interacts with the model layer to perform CRUD operations.
// The service layer can also include validation and transformation of data.
// The service layer is a good place to put business logic that is not specific to the controller or model.
// The service layer can be used to separate concerns and keep the code organized.

export const getAllUsers = async (UserModel) => {
  return await UserModel.find(); 
};

export const isUserAdult = (user) => {
  return user.age >= 18;
};
  