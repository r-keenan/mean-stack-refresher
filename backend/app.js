const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const postsRoutes = require("./routes/posts");

const app = express();

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Houston, we have a problem!");
  });

//parses json data
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
