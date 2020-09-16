const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { messageValidator, validate } = require("../validator/message");
const {
  getMessages,
  createMessage,
  getSingleMessage,
} = require("../controllers/message");
//Routes
router.get("/messages", getMessages);
router.post("/messages", auth, messageValidator(), validate, createMessage);
router.get("/messages/:messageId", getSingleMessage);
//Export
module.exports = router;
