const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { messageValidator, validate } = require("../validator/message");
const {
  getMessages,
  createMessage,
  getSingleMessage,
  editMessage,
  delMessage,
} = require("../controllers/message");

//Routes

/* ------------Getting All Messages {GET ROUTE} {PUBLIC}------------ */
router.get("/messages", getMessages);

/* ------------Createing Message {POST ROUTE} {PRIVATE}------------ */
router.post("/messages", auth, messageValidator(), validate, createMessage);

/* ------------Getting Single Message {GET ROUTE} {PUBLIC}------------ */
router.get("/messages/:messageId", getSingleMessage);

/* ------------Editing Single Message {PUT ROUTE} {PRIVATE}------------ */
router.put("/messages/:messageId", auth, editMessage);

/* ------------DELETE Single Message {DELETE ROUTE} {PRIVATE}------------ */
router.delete("/messages/:messageId", auth, delMessage);
//Export
module.exports = router;
