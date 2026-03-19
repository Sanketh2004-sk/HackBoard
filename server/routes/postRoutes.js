import express from "express";
import Post from "../models/Post.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// create post
router.post("/create", auth, async (req, res) => {
  try {
    const { title, description, link, tags } = req.body;

    const post = new Post({
      title,
      description,
      link,
      tags,
      createdBy: req.user.id,
    });

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("createdBy", "name email");

    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;