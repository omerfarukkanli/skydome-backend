const User = require("../model/user.model");

const { jwtSign, passwordCompare } = require("../services/tokenServices")

module.exports = {
  async Authendication(req, res) {
    try {
      const user = await User.findOne({ username: req.body.email });
      if (user) {
        const result = await passwordCompare(req.body.password, user.password);
        if (result) {
          const token = await jwtSign({ email: req.body.email }, secret);
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
