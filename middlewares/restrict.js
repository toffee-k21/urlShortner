const restrictLoggedInUserOnly = (req,res,next) =>{
    const pass = req.cookies.uid
    // console.log(req)
// const mapUserAndUrls = new Map()
    if(!pass){return res.redirect('/signin')}
    // return res.redirect('/url')
    req.user = pass
    // pass = req.user
    next()
}

module.exports = {
    restrictLoggedInUserOnly
}