const express = require("express");
const AuthendicetionController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", AuthendicetionController.Authendication);

module.exports = router;
