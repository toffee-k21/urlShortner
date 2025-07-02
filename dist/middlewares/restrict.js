"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictLoggedInUserOnly = void 0;
const auth_1 = require("../services/auth");
const restrictLoggedInUserOnly = (req, res, next) => {
    var _a;
    const sessionId = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.uid;
    if (!sessionId) {
        return res.redirect("/auth/signin");
    }
    const user = (0, auth_1.getUser)(sessionId);
    if (!user)
        return;
    const obj = { _id: user };
    if (user) {
        req.user = obj;
        next();
    }
    else {
        res.redirect("/auth/signup");
    }
};
exports.restrictLoggedInUserOnly = restrictLoggedInUserOnly;
