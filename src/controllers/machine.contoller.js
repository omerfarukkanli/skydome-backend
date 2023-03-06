const User = require("../model/user.model");
const Machine = require("../model/machine.model");
module.exports = {
  async getAllMachine(req, res) {
    const id = req.params.id;
    const user = await User.findById(id);
    res.send(user)
  },
  async getMachineById(req, res) {
    let id = req.params.id;
    let machineId = req.params.machineId;
    const user = await User.findById(id);
    const machine = await Machine.findById(machineId);
    res.send(machine);
  },
};
