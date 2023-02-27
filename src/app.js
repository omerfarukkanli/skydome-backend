const express = require("express");
const { port } = require("../config/index");
const connect = require("./dbconnect");
const router = require("./routes/index.router");
const User = require("./model/user.model");
const app = express();

connect();
app.use(express.json());
app.use(router);

// async function run() {
//   const user = new User({
//     username: "ömer",
//     password: "ömer123",
//     machines: [
//       {
//         machineName: "a",
//         machineStopCozgu: 0,
//         machineStopAtki: 0,
//         machineStopOther: 0,
//       },
//       {
//         machineName: "makine 1 ",
//         machineStopCozgu: 0,
//         machineStopAtki: 0,
//         machineStopOther: 0,
//       },
//     ],
//   });

//   await user.save();
//   console.log(user);
// }

app.listen(port, () => {
  console.log(port);
});
