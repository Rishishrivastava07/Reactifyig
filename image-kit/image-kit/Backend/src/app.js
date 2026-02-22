const express = require("express");
const app = express();
const multer = require("multer");
const postModel = require("../models/post-model");
const uploadFile = require("./services/storage.service");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  console.log(result);

  const newPost = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json(newPost);
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  res.send(posts);
});

app.delete("/delete-post/:id", async (req, res) => {
  await postModel.findByIdAndDelete(req.params.id);
  res.send("Post deleted");
});

module.exports = app;
