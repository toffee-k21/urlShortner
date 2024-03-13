const express  = require('express')
const {HandlePostUrl,HandleGetReq} = require('../controllers/url')

const urlRouter = express.Router()

urlRouter.post('/', HandlePostUrl)

urlRouter.get('/:shortId', HandleGetReq)

module.exports = urlRouter