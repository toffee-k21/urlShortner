const express = require('express') 
const useUrlRouter = require('./routes/url')
const mongoose = require('mongoose')
const path = require('path')


mongoose.connect('mongodb://localhost:27017/urlShortner')
.then((r)=>console.log('mongoDB connected!'))
.catch((e)=>console.log('not connected'))

const app = express()
const PORT = 8001
app.use(express.urlencoded({ extended: false }));

// console.log(path.resolve('./views'))
//ejs setup
app.set('view engine', 'ejs');//bta do konsa template engine use kr rhe ho
app.set('views', path.resolve('./views'))//kaha pr h


app.use('/url',useUrlRouter)
// app.get('/ejs', (req,res)=>{
//     // res.end('home')
//     res.render('home')//this syntax is used for template render
// })


app.listen(PORT,()=>console.log(`server started at port : ${PORT}`))