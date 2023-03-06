const express = require("express");
const { isLoggedIn } = require("../middleware/loggedIn");
const {
  createMachine,
  getAllMachine,
  getMachineById,
} = require("../controllers/machine.contoller");

const router = express.Router();

router.get("/machines/", isLoggedIn, getAllMachine);
router.get("/machines/:id", isLoggedIn, getMachineById);
router.post("/machines/create", isLoggedIn, createMachine);

module.exports = router;
