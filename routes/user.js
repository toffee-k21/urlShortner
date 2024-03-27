const express = require("express");
const { handleSignup, handleSignIn, handleInputSignIn,handleInputSignUp } = require("../controllers/user");

const router = express.Router()

router.get('/signin', handleInputSignIn)
router.get('/signup', handleInputSignUp)
router.post('/signin',handleSignIn)
router.post('/signup',handleSignup)

module.exports = router