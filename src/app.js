const { port } = require("../config/index");
const connect = require("./dbconnect");
const User = require("./model/user.model");

const express = require("express");
const app = express();
app.use(express.json());

connect();
run();
async function run() {
  const user = new User({
    username: "Ömer",
    password: "123",
    machines: [
      {
        machineName: "makine1",
        machineStopCozgu: 0.5,
        machineStopAtki: 0.2,
        machineStopOther: 0.0,
      },
      {
        machineName: "makine1",
        machineStopCozgu: 0.5,
        machineStopAtki: 0.2,
        machineStopOther: 0.0,
      },
      {
        machineName: "makine1",
        machineStopCozgu: 0.5,
        machineStopAtki: 0.2,
        machineStopOther: 0.0,
      },
      {
        machineName: "makine1",
        machineStopCozgu: 0.5,
        machineStopAtki: 0.2,
        machineStopOther: 0.0,
      },
      {
        machineName: "makine1",
        machineStopCozgu: 0.5,
        machineStopAtki: 0.2,
        machineStopOther: 0.0,
      },
      {
        machineName: "makine1",
        machineStopCozgu: 0.5,
        machineStopAtki: 0.2,
        machineStopOther: 0.0,
      },
      {
        machineName: "makine1",
        machineStopCozgu: 0.5,
        machineStopAtki: 0.2,
        machineStopOther: 0.0,
      },
    ],
  });
  if (user.machines.length == 0) return console.log("boş birakilamaz");
  else await user.save();
  console.log(user);
}

app.get("/", async (req, res) => {
  const user = new User();
  const bla = await user.machines.find();

  res.send(bla);
});
app.listen(port);
