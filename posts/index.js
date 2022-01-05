const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const app = express();

// body-parser is which allows express to read the body
// that into a json object that we can understand
app.use(bodyParser.json());
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("listening on http://localhost:4000");
});
