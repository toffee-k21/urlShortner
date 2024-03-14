
const URL = require('../models/url')
const shortid = require('shortid')


const HandlePostUrl = async (req,res)=>{
    
    const shortID = shortid(8)
    
    const redirectUrl = req.body.redirectUrl
    // console.log(redirectUrl)
const result = await URL.create({
    shortID: shortID,
    redirectUrl: redirectUrl,
})
return res.json(result)
}

const HandleGetReq = async(req,res) =>{
// console.log(req.params.shortId)
const mainUrl = await URL.findOneAndUpdate({shortID:req.params.shortId},{
$push : { visitHistory : Date.now() }

})
console.log(mainUrl)
// if(mainUrl == '')
// console.log()
res.redirect('https://'+ mainUrl.redirectUrl)
}

module.exports = {HandlePostUrl,HandleGetReq}