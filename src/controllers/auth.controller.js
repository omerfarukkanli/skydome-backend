const User = require("../model/user.model");

module.exports = {
  async Authendication(req, res) {
    const message = "deneme";
    const usern = {
      username: req.body.username,
      password: req.body.password,
    };
    const user = await User.find(usern);
    if (!user) console.log(message);
    res.send(user._id);
  },
};