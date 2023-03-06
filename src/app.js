const express = require("express");
const { port } = require("../config/index");
const connect = require("./dbconnect");
const router = require("./routes");
const app = express();

connect();
app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log(port);
});
