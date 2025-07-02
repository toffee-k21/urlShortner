import express from "express";
import {
  handleSignup,
  handleSignIn,
  handleInputSignIn,
  handleInputSignUp,
} from "../controllers/user";

const router = express.Router();

router.get("/signin", handleInputSignIn);
router.get("/signup", handleInputSignUp);
router.post("/signin", handleSignIn);
router.post("/signup", handleSignup);

export default router;
