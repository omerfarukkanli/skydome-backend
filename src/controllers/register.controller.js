const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const Machine = require("../model/machine.model");

module.exports = {
  async register(req, res) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = new User(req.body);
      for (let index = 0; index < 5; index++) {
        const machine = new Machine({
          machineName: `makine ${index}`,
          machineStopCozgu: index,
          machineStopAtki: index,
          machineStopOther: index,
        });
        user.machines.push(machine);
        await machine.save();
      }
      await user.save();
      res.json(user)
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
