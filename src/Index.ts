import express from 'express';
import urlRouter from './routes/url';
import mongoose from 'mongoose';
import path from 'path';
import signRouter from './routes/user';
import cookieParser from 'cookie-parser';
import { restrictLoggedInUserOnly } from './middlewares/restrict';
import URL from './models/url';


mongoose.connect('mongodb://localhost:27017/urlShortner')
.then((r)=>console.log('mongoDB connected!'))
.catch((e)=>console.log('not connected'))

const app = express()
const PORT = 8001

// app.use(restrictLoggedInUserOnly()) ye yaha nhi ayega kuki req res hai toh ye 'url wle m jyga n
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');//bta do konsa template engine use kr rhe ho
app.set('views', path.resolve('./views'));//kaha pr h
app.get('/',(req, res)=>{
  res.send("hello");
})
app.use('/url',restrictLoggedInUserOnly,urlRouter);
app.use('/auth',signRouter);
app.get('/:shortId',async (req,res)=>{
    const mainUrl = await URL.findOneAndUpdate(
      { shortID: req.params.shortId },
      {
        $push: { visitHistory: Date.now() },
      }
    );
    if(!mainUrl || !mainUrl.redirectUrl){
      res.send('no url registered for this token !');
      return;
    }
    if (
      mainUrl.redirectUrl.startsWith("http://") ||
      mainUrl.redirectUrl.startsWith("https://")
    ) {
      res.redirect(mainUrl?.redirectUrl);
    } else res.redirect("http://" + mainUrl.redirectUrl);
    return;
})

app.listen(PORT,()=>console.log(`server started at port : ${PORT}`));