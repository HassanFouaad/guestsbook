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

///Fetching Signle Message
exports.getSingleMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.messageId);
    if (!message) {
      return res.status(404).json({ error: "No Messages Found!" });
    }
    res.status(200).json(message);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "No Messages Found!" });
  }
};

/////Updating Single Message
exports.editMessage = async (req, res) => {
  try {
    const { subject, text } = req.body;
    const message = await Message.findById(req.params.messageId);
    if (!message) {
      return res.status(400).json({ error: "No message found!" });
    }
    if (message.user.toString() !== req.user._id) {
      return res.status(401).json({ error: "UnAuthorized" });
    }
    const newMessage = await Message.findByIdAndUpdate(
      message._id,
      {
        $set: {
          subject,
          text,
        },
      },
      { new: true }
    );
    res.status(200).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

///Deleting Single Message
exports.delMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.messageId);
    if (!message) {
      return res.status(400).json({ error: "No message found!" });
    }
    if (message.user.toString() !== req.user._id) {
      return res.status(401).json({ error: "UnAuthorized" });
    }
    message.remove();
    res.status(200).json({ msg: "Message has been deleted!" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
