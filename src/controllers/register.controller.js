const User = require("../model/user.model");
const bcrypt = require("bcrypt");

module.exports = {
  async register(req, res) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
