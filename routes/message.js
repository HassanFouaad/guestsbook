const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { getMessages, createMessage } = require("../controllers/message");
//Routes
router.get("/messages", getMessages);
router.post("/messages", auth, createMessage);
//Export
module.exports = router;
