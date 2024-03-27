const user = require("../models/user")

const handleInputSignIn = (req,res) =>{
    res.render('signin')
    }

    const handleInputSignUp = (req,res) =>{
        res.render('signup')
        }
    
const handleSignup = async(req,res)=>{

const val = req.body 
console.log(val)
await user.create({
    userName: val.name,
    email:val.email,
    password:val.password
})

return res.redirect('/url')
}

const handleSignIn = async(req,res )=>{
const val =  req.body 
const u = await user.findOne({
email:val.email,
password:val.password
})

if(!u){
return res.render('signup',{mess:'user not found \n please create a new user by signing Up'})
}
res.redirect('/url')

}

module.exports = {handleSignup,handleInputSignIn,handleInputSignUp,handleSignIn}