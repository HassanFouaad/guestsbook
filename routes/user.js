const express = require("express");
const router = express.Router();
const { signUp } = require("../controllers/user");

//Routes
router.post("/signup", signUp);
//Export
module.exports = router;
