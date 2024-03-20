
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

const showAllurls = async(req,res)=>{
    const data = await URL.find({})
    console.log(data)
res.end(`
<html><head></head><body><h2><ol>${data.map((e)=>`<li>${e.shortID}-${e.redirectUrl}</li>`).join('')}</ol></h2></body></html>`)
}

module.exports = {HandlePostUrl,HandleGetReq , showAllurls}