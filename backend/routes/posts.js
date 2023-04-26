const express = require("express");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const PostsController = require("../controllers/posts");

const router = express.Router();

// checkAuth protects the route and calls the middleware to see if user is authorized or not
router.post("", checkAuth, extractFile, PostsController.createPost);

router.put("/:id", checkAuth, extractFile, PostsController.updatePost);

// req.query holds the query params
// the plus sign in front of req.query converts this into a number
router.get("", PostsController.getPosts);

router.get("/:id", PostsController.getPost);

router.delete("/:id", checkAuth, PostsController.deletePost);

module.exports = router;
