const express = require('express') 
const useUrlRouter = require('./routes/url')
const mongoose = require('mongoose')
const path = require('path')
const signRouter =  require('./routes/user')
const cookieParser = require('cookie-parser')
const { restrictLoggedInUserOnly } = require('./middlewares/restrict')

mongoose.connect('mongodb://localhost:27017/urlShortner')
.then((r)=>console.log('mongoDB connected!'))
.catch((e)=>console.log('not connected'))

const app = express()
const PORT = 8001

// app.use(restrictLoggedInUserOnly()) ye yaha nhi ayega kuki req res hai toh ye 'url wle m jyga n
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');//bta do konsa template engine use kr rhe ho
app.set('views', path.resolve('./views'))//kaha pr h

app.use('/url',restrictLoggedInUserOnly,useUrlRouter)
app.use('/',signRouter)

app.listen(PORT,()=>console.log(`server started at port : ${PORT}`))