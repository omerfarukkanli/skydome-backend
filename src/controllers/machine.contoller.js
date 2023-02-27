const User = require("../model/user.model");

module.exports = {
  async getAllMachine(req, res) {
    var id = req.params.id;
    if (!id) return res.send("Cannot find user");
    const user = await User.findById(id);
    res.send(user.machines);
  
  },
};
