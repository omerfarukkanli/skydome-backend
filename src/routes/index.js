const express = require("express");
const mach = require("./machine.router");
const auth = require("./user.router");


const router = express.Router();

router.use("/api", mach);
router.use("/api", auth);
router.use("/api", regs);

module.exports = router;
