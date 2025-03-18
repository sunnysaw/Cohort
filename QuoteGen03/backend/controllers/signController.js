import UserModel from "../models/userModels.js";
import bcrypt from "bcrypt";

const signupController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const validEmail = await UserModel.findOne({ email });
    if (validEmail) {
      return res.status(400).json({
        message: "User already sign in please login ",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({
      message: "User signup successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: "signup failed try again",
      error: error.message,
    });
  }
};
export default signupController;
