import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: ["please enter your name ", true],
  },
  email: {
    type: String,
    required: ["please enter you email ", true],
  },
  password: {
    type: String,
    required: ["please enter your password", true],
  },
});

const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
