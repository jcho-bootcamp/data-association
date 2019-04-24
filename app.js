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

// let cam = new User({
//   name: "Cam",
//   email: "cam@gmail.com",
// });

// cam.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// let userPost = new Post({
//   title: "How to be George",
//   content: "Just be George!"
// });

// userPost.save((err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// User.findOne({ name: "Cam" }, (err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     user.posts.push({
//       title: "How to be George",
//       content: "Just be George!"
//     });

//     user.save((err, user) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(user);
//       }
//     });
//   }
// });