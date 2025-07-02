"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSignIn = exports.handleSignup = exports.handleInputSignUp = exports.handleInputSignIn = void 0;
const user_1 = __importDefault(require("../models/user"));
const uuid_1 = require("uuid");
const auth_1 = require("../services/auth");
// GET: /auth/signin
const handleInputSignIn = (req, res) => {
    res.render("signin");
};
exports.handleInputSignIn = handleInputSignIn;
// GET: /auth/signup
const handleInputSignUp = (req, res) => {
    res.render("signup");
};
exports.handleInputSignUp = handleInputSignUp;
// POST: /auth/signup
const handleSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    yield user_1.default.create({
        userName: name,
        email,
        password,
    });
    res.redirect("/url");
});
exports.handleSignup = handleSignup;
// POST: /auth/signin
const handleSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_1.default.findOne({ email, password });
    if (!user) {
        return res.render("signup", {
            mess: "User not found. Please create a new account by signing up.",
        });
    }
    const sessionId = (0, uuid_1.v4)();
    (0, auth_1.setUser)(sessionId, user._id);
    res.cookie("uid", sessionId);
    res.redirect("/url");
});
exports.handleSignIn = handleSignIn;
