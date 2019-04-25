const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/data-association", { useNewUrlParser: true });

// POST SCHEMA
let postSchema = new mongoose.Schema({
  title: String,
  content: String
});

// USER SCHEMA
let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  posts: [postSchema]
});

// POST MODEL
let Post = mongoose.model("Post", postSchema);

// USER MODEL
let User = mongoose.model("User", userSchema);

// Create Post and push it by object reference
// Post.create({ title: "How to be Harry pt. 2", content: "Just be Harry again and again!" }, (err, createdPost) => {
//   User.findOne({ name: "Harry" }, (err, foundUser) => {
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(createdPost);
//       foundUser.save((err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       })
//     }
//   });
// });

// Find all Posts for that user
// User.findOne({ email: "potter@gmail.com" }).populate("posts").exec((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// Delete failed posts
// User.deleteMany({ posts: [] }, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// Create Sample User
// User.create({
//   name: "Harry",
//   email: "potter@gmail.com"
// }, (err, newUser) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(newUser);
//   }
// });

