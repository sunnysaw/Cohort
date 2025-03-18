import UserModel from "../models/userModels.js";
import bcrypt from "bcrypt";

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await UserModel.findOne({ email });
    if (!validUser) {
      return res.status(400).json({
        message: "Invalid Email ID",
      });
    }
      const validPassword = await bcrypt.compare(password, validUser.password);
      if (!validPassword) {
        return res.status(400).json({
          message: "wrong password try again",
        });
      }
    if (validUser && validPassword) {
      return res.status(200).json({
        message: "user loged in successfully",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "user login failed",
      error: error.message,
    });
  }
};
export default loginController;
