const mongoose = require("mongoose");

// USER SCHEMA
let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  posts: [postSchema]
});

// USER MODEL
module.exports = mongoose.model("User", userSchema);