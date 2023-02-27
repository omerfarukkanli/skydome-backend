const express = require("express");
const mach = require("./machine.router");
const auth = require("./auth.router");

const router = express.Router();

router.use("/api", mach);
router.use("/api", auth);

module.exports = router;
