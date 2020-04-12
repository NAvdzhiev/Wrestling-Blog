const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');

const Post = require('./models/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect("mongodb://localhost:27017/Wrestling-Blog", { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.set('useCreateIndex', true);
  let db = mongoose.connection;
  db.once('open', err => {
    if (err) {
      throw err;
    }
    console.log('MongoDB ready!');
  })
  db.on('error', err => console.log(`Database error: ${err}`));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT ,DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save()
  res.status(201).json({
    message: 'Post added successfully'
  });
  next();
});

app.get("/api/posts", (req, res, next) => {
  Post.get((res) => {
    console.log(res);
  })
  return res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts,
  });
});

module.exports = app;
