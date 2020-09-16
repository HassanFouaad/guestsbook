const express = require("express");
const router = express.Router();
const { getMessages } = require("../controllers/message");
//Routes
router.get("/messages", getMessages);
//Export
module.exports = router;
