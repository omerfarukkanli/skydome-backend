const express = require("express");
const { isLoggedIn } = require("../middleware/loggedIn");
const {
  createMachine,
  getAllMachine,
  getMachineById,
} = require("../controllers/machine.contoller");
const {Authendication} = require("../controllers/authentication.controller");
const router = express.Router();

router.post("login/machines/", isLoggedIn, getAllMachine);
router.post("/machines/:id", isLoggedIn, getMachineById);
router.post("/machines/create", isLoggedIn, createMachine);

module.exports = router;
