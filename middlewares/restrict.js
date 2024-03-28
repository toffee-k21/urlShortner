const restrictLoggedInUserOnly = (req,res,next) =>{
    console.log(req)
    const pass = req.cookies.uid

    if(!pass){return res.redirect('/signin')}
    // return res.redirect('/url')
    next()
}

module.exports = {
    restrictLoggedInUserOnly
}