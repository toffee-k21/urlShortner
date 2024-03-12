const express  = require('express')
const HandlePostUrl = require('../controllers/url')

const urlRouter = express.Router()

urlRouter.post('/', HandlePostUrl)

module.exports = urlRouter