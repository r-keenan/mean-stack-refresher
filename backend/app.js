const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
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
