import express from "express";
import {
	forgotPassword,
	login,
	register,
	resetPassword,
} from "../controllers/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetPassword);

export default router;
