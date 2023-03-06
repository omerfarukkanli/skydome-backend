const express = require("express");
const { Authendication } = require("../controllers/authentication.controller");

const router = express.Router();

router.post("/login", Authendication);

module.exports = router;
