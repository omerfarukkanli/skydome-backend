const express = require("express");
const mach = require("./machine.router");
const auth = require("./auth.router");
const regs = require("./register.router");

const router = express.Router();

router.use("/api", mach);
router.use("/api", auth);
router.use("/api", regs);

module.exports = router;
