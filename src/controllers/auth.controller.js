const User = require("../model/user.model");

module.exports = {
  async Authendication(req, res) {
    const message = "deneme";
    const userBody = {
      username: req.body.username,
      password: req.body.password,
    };
    const user = await User.find(userBody);
    if (!user) console.log(message);
    res.send(user);
  },
};
