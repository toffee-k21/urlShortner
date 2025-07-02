"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URLSchema = new mongoose_1.default.Schema({
    shortID: {
        type: String,
        required: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
    },
    visitHistory: []
});
const URL = mongoose_1.default.model('url', URLSchema);
exports.default = URL;
