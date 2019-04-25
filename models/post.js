const mongoose = require("mongoose");

// POST SCHEMA
let postSchema = new mongoose.Schema({
  title: String,
  content: String
});

// POST MODEL
module.exports = mongoose.model("Post", postSchema);

