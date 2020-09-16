const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/user");
const { userSignUpValidator, validate } = require("../validator/user");

//Routes
router.post("/signup", userSignUpValidator(), validate, signUp);
router.post("/signin", signIn);

//Export
module.exports = router;
