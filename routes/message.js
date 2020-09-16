const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { messageValidator, validate } = require("../validator/message");
const { getMessages, createMessage } = require("../controllers/message");
//Routes
router.get("/messages", getMessages);
router.post("/messages", auth, messageValidator(), validate, createMessage);
//Export
module.exports = router;
