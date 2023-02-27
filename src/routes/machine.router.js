const express = require("express");
const { getAllMachine } = require("../controllers/machine.contoller");

const router = express.Router();

router.post("/machines/:id",getAllMachine);

module.exports = router;
