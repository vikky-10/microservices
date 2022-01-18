const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const app = express();

app.use(bodyParser.json());

const commentById = {};
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentById[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentById[req.params.id] || [];
  // console.log(commentById[req.params.id]);
  // console.log(comments);
  comments.push({ id: commentId, content });
  // console.log(comments);
  commentById[req.params.id] = comments;
  // console.log(comments);
  // console.log(commentById);
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("listening on http://localhost:4001");
});
