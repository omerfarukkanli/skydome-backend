const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config/index");

module.exports = {
  async Authendication(req, res) {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
          const token = await jwt.sign({ username: user.username }, secret);
          res.json({ token });
        } 
        else res.status(400).json({ error: "password doesn't match" });
      } 
      else res.status(400).json({ error: "User doesn't exist" });
    } 
    catch (error) {
      res.status(400).json({ error });
    }
  },
};
