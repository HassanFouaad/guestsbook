const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const messageSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    subject: {
      type: String,
      required: true,
      minlength: 1,
    },
    text: {
      type: String,
      required: true,
      minlength: 1,
    },
    replies: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);
messageSchema.plugin(uniqueValidator);
module.exports = Message = mongoose.model("Message", messageSchema);
