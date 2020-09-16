const express = require("express");
const router = express.Router();
const { signUp } = require("../controllers/user");
const { userSignUpValidator, validate } = require("../validator/user");
//Routes
router.post("/signup", userSignUpValidator(), validate, signUp);
//Export
module.exports = router;
