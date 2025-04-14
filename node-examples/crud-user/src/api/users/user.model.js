import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    user_name: {
      type: String,
      unique: true,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
