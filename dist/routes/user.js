"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.get("/signin", user_1.handleInputSignIn);
router.get("/signup", user_1.handleInputSignUp);
router.post("/signin", user_1.handleSignIn);
router.post("/signup", user_1.handleSignup);
exports.default = router;
