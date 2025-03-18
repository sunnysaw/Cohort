import express from "express";
import loginController from "../controllers/loginController.js";
import signupController from "../controllers/signController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import quote from "../controllers/quoteController.js";

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", signupController);
router.get("/quote" , quote)

export default router;
