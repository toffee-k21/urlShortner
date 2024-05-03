const express  = require('express')
const {HandlePostUrl,HandleGetReq,showAllurls} = require('../controllers/url')

const urlRouter = express.Router()

urlRouter.post('/', HandlePostUrl)

urlRouter.get('/', showAllurls)

// urlRouter.get('/:shortId', HandleGetReq)

module.exports = urlRouter