const express = require("express");
const { isLoggedIn } = require("../middleware/loggedIn");
const {
  getAllMachine,
  getMachineById,
} = require("../controllers/machine.contoller");

const router = express.Router();

router.post("/machines/", isLoggedIn, getAllMachine);
router.post("/machines/:machineId", isLoggedIn, getMachineById);

module.exports = router;
