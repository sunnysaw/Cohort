import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnection.js";
import router from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
dbConnect();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["POST", "GET"],
    credentials: true,
  })
);
app.use(router);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server is running on : ${port}`);
});
