const { port } = require("../config/index");
const { connectToDB } = require("./utils/connectToDB");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`listening port ${port}`);
  connectToDB();
  app.use(express.json());
});
