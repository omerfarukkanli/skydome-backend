const express = require("express");
const authendicetionController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", authendicetionController.Authendication);

module.exports = router;
