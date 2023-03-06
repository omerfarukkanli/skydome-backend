
const Machine = require("../model/machine.model");
module.exports = {
  async getAllMachine(req, res) {
    const machine = await Machine.find()
    res.send(machine);
  },
  async getMachineById(req, res) {
    const _id = req.params.id;
    const machine = await Machine.findById(_id);
    res.send(machine);
  },
  async createMachine(req, res) {
    const machine = await Machine.create(req.body);
    res.json(machine);
  },
};
