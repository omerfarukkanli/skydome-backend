const express = require("express");
const { port } = require("../config/index");
const connect = require("./dbconnect");
const router = require("./routes");
const User = require("./model/user.model");
const Machine = require("./model/machine.model");
const app = express();

connect();
app.use(express.json());
app.use(router);

async function run() {
  const machine = new Machine({
    machineName: "1",
    
  });
  const user = new User({
    username: "ömer1",
    password: "ömer123",
    machines: [],
  });

  await user.save();
  console.log(user);
}

app.listen(port, () => {
  console.log(port);
});
