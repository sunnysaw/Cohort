import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Db_Url = process.env.DB_URL;

const dbConnect = async () => {
  try {
    mongoose
      .connect(Db_Url)
      .then(() => console.log("Db connected successfully"))
      .catch((err) => console.error("Some error occurred:", err));
  } catch (error) {
      console.log("error occured :", error.message);
      process.exit(1);
  }
};
export default dbConnect;
