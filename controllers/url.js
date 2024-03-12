// const  nanoid  =  require('nanoid/nanoid')
// const ShortUniqueId = require('short-unique-id');
// const uid = require('short')
const URL = require('../models/url')
const shortid = require('shortid')


const HandlePostUrl = async (req,res)=>{
    // const uid = new ShortUniqueId({ length: 8 });
    // const shortID = uid.rnd();
    // const shortID = nanoid()
    const shortID = shortid(8).toString()
    
    const redirectUrl = req.body
const result = await URL.create({
    shortID: shortID,
    redirectUrl: redirectUrl,
})
// return res.json(result)
}

module.exports = HandlePostUrl