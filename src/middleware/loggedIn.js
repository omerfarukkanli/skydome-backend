const jwt = require("jsonwebtoken");
const { secret } = require("../../config/index");

module.exports = {
  async isLoggedIn(req, res, next) {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
          const payload = await jwt.verify(token, secret);
          if (payload) {
            req.user = payload;
            next();
          } else res.status(400).json({ error: "token verification failed" });
        } else res.status(400).json({ error: "malformed auth header" });
      } else res.status(400).json({ error: "No authorization header" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
