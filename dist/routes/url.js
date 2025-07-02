"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_1 = require("../controllers/url");
const urlRouter = express_1.default.Router();
urlRouter.post("/", url_1.HandlePostUrl);
urlRouter.get("/", url_1.showAllurls);
// urlRouter.get('/:shortId', HandleGetReq)
exports.default = urlRouter;
