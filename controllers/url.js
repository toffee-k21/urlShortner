const URL = require("../models/url");
const shortid = require("shortid");
const {getUser} = require('../services/auth')

const HandlePostUrl = async (req, res) => {
  const shortID = shortid(8);
  // console.log('ye hai',req.user)
 const u =  req.user;

 console.log(u);

  const redirectUrl = req.body.redirectUrl;
  const result = await URL.create({
    shortID: shortID,
    redirectUrl: redirectUrl,
    userId: u._id
  });


  // return res.render("home", { data: data });
  return res.redirect("url/");
};

const HandleGetReq = async (req, res) => {
  const mainUrl = await URL.findOneAndUpdate(
    { shortID: req.params.shortId },
    {
      $push: { visitHistory: Date.now() },
    }
  );

  res.redirect(mainUrl.redirectUrl);
};

const showAllurls = async (req, res) => {

  const data = await URL.find({
    userId: req.user._id
  });

  res.render("home", { data: data });
};

module.exports = { HandlePostUrl, HandleGetReq, showAllurls };
