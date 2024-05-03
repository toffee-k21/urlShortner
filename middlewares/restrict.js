const { getUser } = require("../services/auth")

const restrictLoggedInUserOnly = (req,res,next) =>{
    const pass = req.cookies.uid
    if(!pass){return res.redirect('/signin')}

    // if(pass == )
    // console.log(pass)
    const val = getUser(pass)
    // console.log(val)

    if (val) {    
        req.user = val
        next()
    }
else{res.redirect("/signup")}

}

module.exports = {
    restrictLoggedInUserOnly
}