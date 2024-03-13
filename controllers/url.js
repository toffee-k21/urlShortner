
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
const mainUrl = await URL.find({shortID:req.params.shortId})
// console.log(mainUrl)
// if(mainUrl == '')
res.redirect('https://'+ mainUrl[0].redirectUrl)
}

module.exports = {HandlePostUrl,HandleGetReq}