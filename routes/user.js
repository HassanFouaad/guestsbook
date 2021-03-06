const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/user");
const {
  userSignUpValidator,
  userSigninValidator,
  validate,
} = require("../validator/user");

//Routes
router.post("/signup", userSignUpValidator(), validate, signUp);
router.post("/signin", userSigninValidator(), validate, signIn);

//Export
module.exports = router;
