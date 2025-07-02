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
exports.showAllurls = exports.HandlePostUrl = void 0;
const url_1 = __importDefault(require("../models/url"));
const shortid_1 = __importDefault(require("shortid"));
// POST handler to create short URL
const HandlePostUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shortID = shortid_1.default.generate(); // generate() instead of shortid(8)
    const user = req.user;
    console.log(user);
    const redirectUrl = req.body.redirectUrl;
    yield url_1.default.create({
        shortID,
        redirectUrl,
        userId: user._id,
    });
    return res.redirect("url/");
});
exports.HandlePostUrl = HandlePostUrl;
// GET handler to show all URLs created by the user
const showAllurls = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const data = yield url_1.default.find({ userId: user._id });
    res.render("home", { data });
});
exports.showAllurls = showAllurls;
// Optional future use
// export const HandleGetReq = async (req: Request, res: Response) => {
//   const mainUrl = await URL.findOneAndUpdate(
//     { shortID: req.params.shortId },
//     { $push: { visitHistory: Date.now() } }
//   );
//   res.redirect(mainUrl?.redirectUrl || "/");
// };
