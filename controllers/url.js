const URL = require("../models/url");
const shortid = require("shortid");

const HandlePostUrl = async (req, res) => {
  const shortID = shortid(8);
  console.log('ye hai',req.user)

  const redirectUrl = req.body.redirectUrl;
  const result = await URL.create({
    shortID: shortID,
    redirectUrl: redirectUrl,
    // userId: 
  });

  // const data = await URL.find({});
  const data = await URL.find({
    email: req.user.email
  })

  return res.render("home", { data: data });
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
  const data = await URL.find({});

  res.render("home", { data: data });
};

module.exports = { HandlePostUrl, HandleGetReq, showAllurls };
