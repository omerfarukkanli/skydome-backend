const express = require("express");
const { register } = require("../controllers/register.controller");
const { Authendication } = require("../controllers/authentication.controller");

const router = express.Router();
router.post("auth/register", register);
router.post("auth/login", Authendication);

module.exports = router;

