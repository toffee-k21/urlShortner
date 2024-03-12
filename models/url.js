const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
  shortID: {
    type: String,
    required: true,
  },
  redirectUrl:{
    type:String,
    required:true,
  }
});

const URL = mongoose.model('url', URLSchema)

module.exports = URL
