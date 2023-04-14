const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//parses json data
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully.",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "kjsdflkdsjkldfjd",
      title: "first server-side post",
      content: "this is coming from the server",
    },
    {
      id: "jlkdsfjkl",
      title: "second server-side post",
      content: "this is coming from the server too",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts,
  });
});

module.exports = app;
