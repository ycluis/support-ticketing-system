const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  ticket: {
    type: mongoose.Schema.ObjectId,
    ref: "Ticket",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: [true, "Please add a content"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
