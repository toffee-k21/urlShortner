const express = require('express') 
const useUrlRouter = require('./routes/url')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/urlShortner')
.then((r)=>console.log('mongoDB connected!'))
.catch((e)=>console.log('not connected'))

const app = express()
const PORT = 8001
app.use(express.urlencoded({ extended: false }));
// app.get('/',(req,res)=>res.end('hello'))
app.use('/url',useUrlRouter)


app.listen(PORT,()=>console.log(`server started at port : ${PORT}`))