const mongoose = require("mongoose");
const Message = require("../models/Message");

////Fetching All Messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

///Creating Single Message
exports.createMessage = async (req, res) => {
  try {
    const newMessage = new Message({
      text: req.body.text,
      subject: req.body.subject,
      user: req.user._id,
    });
    const message = await newMessage.save();
    res.status(200).json(message);
  } catch (error) {
    console.error(error);
    res.json({ error: error });
  }
};
