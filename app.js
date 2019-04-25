const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/data-association", { useNewUrlParser: true });

let Post = require("./models/post");
let User = require("./models/user");

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