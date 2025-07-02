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
const express_1 = __importDefault(require("express"));
const url_1 = __importDefault(require("./routes/url"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const user_1 = __importDefault(require("./routes/user"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const restrict_1 = require("./middlewares/restrict");
const url_2 = __importDefault(require("./models/url"));
mongoose_1.default.connect('mongodb://localhost:27017/urlShortner')
    .then((r) => console.log('mongoDB connected!'))
    .catch((e) => console.log('not connected'));
const app = (0, express_1.default)();
const PORT = 8001;
// app.use(restrictLoggedInUserOnly()) ye yaha nhi ayega kuki req res hai toh ye 'url wle m jyga n
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.set('view engine', 'ejs'); //bta do konsa template engine use kr rhe ho
app.set('views', path_1.default.resolve('./views')); //kaha pr h
app.get('/', (req, res) => {
    res.send("hello");
});
app.use('/url', restrict_1.restrictLoggedInUserOnly, url_1.default);
app.use('/auth', user_1.default);
app.get('/:shortId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mainUrl = yield url_2.default.findOneAndUpdate({ shortID: req.params.shortId }, {
        $push: { visitHistory: Date.now() },
    });
    if (!mainUrl || !mainUrl.redirectUrl) {
        res.send('no url registered for this token !');
        return;
    }
    if (mainUrl.redirectUrl.startsWith("http://") ||
        mainUrl.redirectUrl.startsWith("https://")) {
        res.redirect(mainUrl === null || mainUrl === void 0 ? void 0 : mainUrl.redirectUrl);
    }
    else
        res.redirect("http://" + mainUrl.redirectUrl);
    return;
}));
app.listen(PORT, () => console.log(`server started at port : ${PORT}`));
